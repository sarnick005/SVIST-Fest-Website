import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../footer";
import {
  Box,
  Button,
  Text,
  Heading,
  Center,
  SimpleGrid,
  Image,
  Stack,
  Card,
  CardBody,
} from "@chakra-ui/react";

import Header from "../header";

const Gallery = () => {
  const [galleryPosts, setGalleryPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(null);
  const [width, setWidth] = useState("100%");
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("black");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/v1/posts");
        const posts = response.data.data.allPosts;
        const sortedPosts = posts.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setGalleryPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDeleteButton = async (postId) => {
    try {
      await axios.delete(``);
      setGalleryPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== postId)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

export default Gallery;
