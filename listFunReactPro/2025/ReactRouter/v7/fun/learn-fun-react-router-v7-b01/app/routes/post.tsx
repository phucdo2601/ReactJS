import React, { useState } from "react";
import type { Route } from "./+types/post";
import axios from "axios";
import { Form } from "react-router";

interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const postId = params.postId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const returnData: PostModel = response.data;
  return {
    postId,
    returnData,
  };
};

export async function clientAction({ params }: Route.LoaderArgs) {
  await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
}

const Post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <>
      <div>
        <p className="text-3xl font-bold underline">
          Post ID: {loaderData.postId}
        </p>
        <p className="text-3xl font-bold underline">
          Post UserId: {loaderData.returnData?.userId}
        </p>
        <p className="text-3xl font-bold underline">
          Post Title: {loaderData.returnData?.title}
        </p>
        <p className="text-3xl font-bold underline">
          Post Body: {loaderData.returnData?.body}
        </p>

        <Form method="delete">
          <button type="submit">Delete</button>
        </Form>
      </div>
    </>
  );
};

export default Post;
