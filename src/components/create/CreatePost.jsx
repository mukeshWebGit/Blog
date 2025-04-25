import { Box, styled } from '@mui/material';
import React from 'react';
const Container = styled(Box)`
    width: 100%;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const CreatePost = () => {
    return (
        <div>
            <Container>
            <h1>Create a New Post</h1>
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </Container>
        </div>
    );
};

export default CreatePost;