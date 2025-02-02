import React from "react";
import type { Route } from "./+types/post";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const postId = params.postId;
  return {
    postId,
  };
};

export async function action() {}

const Post = ({ loaderData }: Route.ComponentProps) => {
  return (
    <>
      <div>
        <p className="text-3xl font-bold underline">
          Post ID: {loaderData.postId}
        </p>
      </div>
    </>
  );
};

export default Post;
