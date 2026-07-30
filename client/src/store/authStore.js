import { create } from "zustand";

export const useAuthStore = create((set)=> ({
    user:{
        _id: "1",
        fullName: "Mac",
        email: "mac@example.com",
        role: "employee",
        profileImage: "",
    }
}))