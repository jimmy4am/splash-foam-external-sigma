import React, { useState } from "react";
import Image from "next/image";
import {
  PencilIcon,
  TrashIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { auth } from "../../../firebase";
import { FileUploader } from "react-drag-drop-files";
import { ImageProps } from "next/image";
import { Post } from "@/interfaces/post";
import MediaLibraryPop from "./media-library-pop";

const fileTypes = ["jpeg", "jpg", "png", "gif", "webp"] as const;
type FileType = (typeof fileTypes)[number];

// Helper type to get nested object path types
type PathImpl<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
      : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
    : K
  : never;

export type Path<T> = PathImpl<T, keyof T> | keyof T;

interface EditImageProps<T extends Record<string, any>>
  extends Omit<ImageProps, "src"> {
  src: string | null | undefined;
  post?: T;
  setPost?: (data: T) => void;
  setCurrentPost?: (post: Post) => void; // For backward compatibility
  field?: Path<T>;
  postField?: string; // For backward compatibility
}

interface UploadResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

const EditImage = <T extends Record<string, any>>({
  src,
  alt,
  width,
  height,
  className = "",
  post,
  setPost,
  setCurrentPost,
  field,
  postField,
  priority,
  ...props
}: EditImageProps<T>) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const fallbackSrc = "/images/icons/missing-img.jpg";
  const isUsingFallback = !src || src === fallbackSrc;
  const fileUploaderRef = React.useRef<HTMLInputElement>(null);

  const updateNestedField = (obj: any, path: string, value: string): any => {
    const fields = path.split(".");
    const newObj = { ...obj };
    let current: any = newObj;

    for (let i = 0; i < fields.length - 1; i++) {
      current[fields[i]] = { ...current[fields[i]] };
      current = current[fields[i]];
    }

    current[fields[fields.length - 1]] = value;
    return newObj;
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (setPost && post && field) {
      const newData = updateNestedField(post, field as string, fallbackSrc);
      setPost(newData);
    } else if (setCurrentPost && post && postField) {
      // Legacy support
      const newPost = updateNestedField(post, postField, fallbackSrc);
      setCurrentPost(newPost);
    }
  };

  const uploadFile = async (file: File): Promise<string | null> => {
    if (!file || !auth.currentUser) return null;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("dbRef", "images");

      const token = await auth.currentUser.getIdToken();
      const response = await fetch("/api/uploadImageCloudflare", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = (await response.json()) as UploadResponse;
      if (data.success && data.imageUrl) {
        return data.imageUrl;
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      return null;
    }
  };

  const handleUpload = async (file: File) => {
    if (file) {
      setIsHovered(true);
      setIsUploading(true);
      try {
        const imageUrl = await uploadFile(file);
        if (imageUrl) {
          if (setPost && post && field) {
            const newData = updateNestedField(post, field as string, imageUrl);
            setPost(newData);
          } else if (setCurrentPost && post && postField) {
            // Legacy support
            const newPost = updateNestedField(post, postField, imageUrl);
            setCurrentPost(newPost);
          }
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
        setIsHovered(false);
      }
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fileUploaderRef.current) {
      fileUploaderRef.current.click();
    }
  };

  const handleMediaLibrarySelect = (imageUrl: string) => {
    if (setPost && post && field) {
      const newData = updateNestedField(post, field as string, imageUrl);
      setPost(newData);
    } else if (setCurrentPost && post && postField) {
      // Legacy support
      const newPost = updateNestedField(post, postField, imageUrl);
      setCurrentPost(newPost);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative border-2 border-yellow-500 border-dashed ${isUsingFallback ? "bg-gray-200" : ""}`}>
        <div className={isUsingFallback ? "aspect-[2/1]" : ""}>
          <Image
            src={src || fallbackSrc}
            alt={alt}
            width={width}
            height={height}
            className={`${className} ${isDragActive ? "opacity-50" : ""} ${
              isUsingFallback ? "object-contain" : ""
            }`}
            priority={priority}
            {...props}
          />
        </div>
      </div>

      <div className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full min-w-[250px] min-h-[100px] ${isHovered || isDragActive ? "opacity-100 visible" : "invisible  opacity-0"}`}>

        {/*Open media library button*/}
        <div
          className="absolute top-0 left-0 right-0 h-10 bg-green-500 opacity-80 transition-opacity z-20 flex justify-center items-center cursor-pointer hover:opacity-100 "
          onClick={(e) => {
            e.stopPropagation();
            setShowMediaLibrary(true);
          }}
        >
          <span className="text-white flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Choose from Media Library
          </span>
        </div>

        {/*File upload layout*/}
        <div className="group cursor-pointer h-full [&>label]:block [&>label]:w-[100%] [&>label]:h-[100%] [&>label>input]:w-[100%] [&>label>input]:h-[100%]">
          <FileUploader
            handleChange={handleUpload}
            types={fileTypes}
            multiple={false}
            onDraggingStateChange={(dragging: boolean) => setIsDragActive(dragging)}
          >
            {(isHovered || isDragActive) && (
              <div className="absolute pt-10 inset-0 bg-black/50 flex items-center justify-center gap-4 z-10">
                {isUploading ? (
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : isDragActive ? (
                  <div className="flex flex-col items-center">
                    <ArrowUpTrayIcon className="w-8 h-8 text-white mb-2" />
                    <span className="text-white text-sm">Drop to Upload</span>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={handleEdit}
                      className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <PencilIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <TrashIcon className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>
            )}
          </FileUploader>
        </div>
      </div>

      <MediaLibraryPop
        isOpen={showMediaLibrary}
        onClose={() => setShowMediaLibrary(false)}
        onSelect={handleMediaLibrarySelect}
      />
    </div>
  );
};

export default EditImage;
