"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { toast, useToast } from "@/components/ui/use-toast"
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster } from '@/components/ui/toaster';
// components/Form.js
// import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

export const InputForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '' });
    const { toast } = useToast()
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email } = formData;

        if (!username) {
            toast({
                title: "Scheduled: Catch up",
                description: "Username cannot be empty",
            });
            return;
        }

        if (!email) {
            toast({
                title: "Scheduled: Catch up",
                description: "Email cannot be empty",
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast('Invalid email format');
            return;
        }

        toast('Form submitted successfully!');
        // Perform your form submission logic here (e.g., API call)
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            < Toaster />
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
