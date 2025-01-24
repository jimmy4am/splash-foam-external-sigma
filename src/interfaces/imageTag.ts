export type TagInfo = {
  id: string; // Same as tag name
  count: number; // Number of images using this tag
  lastUsed: number; // Timestamp
};

export type UserTagInfo = {
  id: string; // User ID
  email: string; // User email
  count: number; // Number of images uploaded by user
  lastUsed: number; // Timestamp
};
