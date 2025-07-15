import { supabase } from "./supabase";
import { User } from "./object_type";

const tableName = "users";

export async function getAllUsers() {
    const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .order("id", { ascending: true });
    if (error) {
        throw error;
    }
    return data;
};

export async function getUserById(id: number) {
    const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .eq("id", id)
        .single();
    if (error) {
        console.error(`Error fetching user by ID${id}: `, error);
        throw error;
    }
    return data;
};

export async function createUser(user: User) {
    const { data, error } = await supabase
        .from(tableName)
        .insert([user])
        .select("*")
        .single();
    if (error) {
        console.error("Error creating user: ", error);
        throw error;
    }
    return data;
};

export async function updateUser(id: number, user: User) {
    const { data, error } = await supabase
        .from(tableName)
        .update(user)
        .eq("id", id);
    if (error) {
        console.error(`Error updating user with ID ${id}: `, error);
        throw error;
    }
    return data;
};

export async function deleteUser(id: number) {
    const { data, error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", id);
    if (error) {
        console.error(`Error deleting user with ID ${id}: `, error);
        throw error;
    }
    return data;
};