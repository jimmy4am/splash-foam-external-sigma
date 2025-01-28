import React, { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { ImageType } from "@/interfaces/image";
import { TagInfo } from "@/interfaces/imageTag";

interface MediaLibraryPopProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (imageUrl: string) => void;
}

const MediaLibraryPop = ({
  isOpen,
  onClose,
  onSelect,
}: MediaLibraryPopProps) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [tagRegistry, setTagRegistry] = useState<TagInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Fetch images and tags on component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const imagesRef = collection(db, "images");
        let q = query(imagesRef, orderBy("timestamp", "desc"));

        if (selectedTag && selectedTag !== "(no tags)") {
          q = query(q, where("tags", "array-contains", selectedTag));
        } else if (selectedTag === "(no tags)") {
          q = query(q, where("hasNoTags", "==", true));
        }

        const querySnapshot = await getDocs(q);
        const fetchedImages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ImageType[];

        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTagRegistry = async () => {
      try {
        const tagRegistryRef = collection(db, "images/_tagRegistry/tags");
        const q = query(tagRegistryRef, orderBy("count", "desc"));
        const snapshot = await getDocs(q);

        const tags = snapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as TagInfo[];

        setTagRegistry(tags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    if (isOpen) {
      fetchInitialData();
      fetchTagRegistry();
    }
  }, [isOpen, selectedTag]);

  // Filter images based on search term
  const filteredImages = images.filter((img) => {
    const matchesSearch =
      searchTerm === "" ||
      img.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  const handleSelect = (image: ImageType) => {
    if (image.url) {
      onSelect(image.url);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Media Library</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-2.5 text-gray-400">
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
                </div>
                <input
                  type="text"
                  placeholder="Search by tags..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                <option value="">All Tags</option>
                <option value="(no tags)">(No Tags)</option>
                {tagRegistry.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.id} ({tag.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Image Grid */}
          {/* Image Grid */}
          <div
            className="p-4 overflow-y-auto"
            style={{ maxHeight: "calc(90vh - 180px)" }}
          >
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                <svg
                  className="w-12 h-12 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
                <p>No images found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative aspect-square"
                    onMouseEnter={() => setHoveredImageId(image.id)}
                    onMouseLeave={() => setHoveredImageId(null)}
                  >
                    <img
                      src={image.url}
                      alt={image.tags?.join(", ") || ""}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {hoveredImageId === image.id && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg transition-all">
                        <div className="absolute inset-0 flex flex-col justify-between p-3">
                          <div className="flex flex-wrap gap-1">
                            {image.tags?.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                            {(image.tags?.length || 0) > 3 && (
                              <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                +{(image.tags?.length || 0) - 3} more
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleSelect(image)}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors w-full mt-2"
                          >
                            Select Image
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibraryPop;
