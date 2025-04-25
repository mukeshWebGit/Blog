import { Box, Button, FormControl, InputBase, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react';
const Container = styled(Box)`
    width: 100%;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
`;
const StyledFormControl = styled(FormControl)`
    display: flex;  
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
    & > div {
        margin: 10px 0;
    }
    & > div > label {
        margin-bottom: 5px;
    }
    & > div > input[type="file"] {
        padding: 10px;
    }
    & > div > textarea {
        width: 100%;
        height: 200px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    & > button {
        background-color: #3f51b5;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
            background-color: #303f9f;
        }
    }
`;
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
const CreatePost = () => {
    return (
        <div>
            <Container>
            <h1>Create a New Post</h1>
            <StyledFormControl>
                <div>
                <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
                </div>
                <div>
                    <label htmlFor="title">upload</label>
                    <InputBase placeholder='Title'></InputBase> 
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content"></textarea>
                </div>
                <Button type="submit">Submit</Button>
            </StyledFormControl>
            </Container>
        </div>
    );
};

export default CreatePost;