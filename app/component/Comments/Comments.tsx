"use client";

import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md"; // Import delete icon from react-icons
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons for rating

const Comments = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0); // Rating state (0-5)
    const [comments, setComments] = useState<{ name: string; comment: string; rating: number }[]>([]);
    const [error, setError] = useState<string>(""); // To store validation error message

    // Load comments from localStorage on component mount
    useEffect(() => {
        const storedComments = localStorage.getItem("comments");
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    // Save comments to localStorage whenever the comments array changes
    useEffect(() => {
        if (comments.length > 0) {
            localStorage.setItem("comments", JSON.stringify(comments));
        }
    }, [comments]);

    // Post a comment and reset the form
    const handlePostComment = () => {
        if (!name || !comment || rating === 0) {
            setError("Please fill in all fields and provide a rating.");
            return;
        }

        const newComment = { name, comment, rating };
        setComments([newComment, ...comments]);
        setName("");
        setComment("");
        setRating(0); // Reset rating after posting
        setError(""); // Clear any error messages
    };

    // Handle delete comment
    const handleDeleteComment = (index: number) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
    };

    // Check if the form is valid for enabling the button
    const isFormValid = name.trim() !== "" && comment.trim() !== "" && rating !== 0;

    return (
        <div className="mt-[60px] max-w-2xl mx-auto px-4">
            <h2 className="font-bold text-[25px]">Reviews & Ratings</h2>

            <div className="mt-[50px]">
                {comments.length === 0 ? (
                    <p className="text-center">No reviews & ratings yet.</p>
                ) : (
                    comments.map((comment, index) => (
                        <div
                            key={index}
                            className="mt-[20px] flex justify-between items-start border-b border-gray-300 pb-4"
                        >
                            <div className="flex-1">
                                <h1 className="font-[700] capitalize">{comment.name}</h1>
                                <p className="text-gray-600 mt-[10px]">{comment.comment}</p>
                                <div className="flex mt-[10px]">
                                    {/* Display stars based on rating */}
                                    {[...Array(5)].map((_, i) => (
                                        i < comment.rating ? (
                                            <FaStar key={i} className="text-yellow-500 text-lg" />
                                        ) : (
                                            <FaRegStar key={i} className="text-yellow-500 text-lg" />
                                        )
                                    ))}
                                </div>
                            </div>
                            <button
                                onClick={() => handleDeleteComment(index)}
                                className="mt-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                            >
                                <MdDelete className="text-xl" />
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-[50px]">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none mb-[15px] focus:ring-2 focus:ring-blue-400"
                    placeholder="Write your name"
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Write a review..."
                ></textarea>

                {/* Rating stars input */}
                <div className="flex mt-3 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setRating(i + 1)}
                            className="cursor-pointer transition-all duration-200"
                        >
                            {i < rating ? (
                                <FaStar className="text-yellow-500 text-2xl hover:text-yellow-400" />
                            ) : (
                                <FaRegStar className="text-yellow-500 text-2xl hover:text-yellow-400" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Display error message */}
                {error && <p className="text-red-500 mb-3">{error}</p>}

                <button
                    onClick={handlePostComment}
                    className={`mt-[10px] px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 ${!isFormValid ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : ''}`}
                    disabled={!isFormValid}
                >
                    Post Comment
                </button>
            </div>
        </div>
    );
};

export default Comments;
