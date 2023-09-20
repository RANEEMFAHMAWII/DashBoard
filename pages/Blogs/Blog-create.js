import React from 'react';
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

import CategoriesSelect from '@/components/Projects/ProjectCreate/CategoriesSelect';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

import dynamic from 'next/dynamic'
import MemberSelect from '@/components/Projects/ProjectCreate/MemberSelect';
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const AddBlog = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };


  const [priority, setPriority] = React.useState('');
  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <>
     
      <div className={styles.pageTitle}>
        <h1>Blogs</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Blogs</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Typography
          as="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
            mb: '15px'
          }}
        >
          Create Blogs
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                title
              </Typography>
              <TextField
                autoComplete="project-name"
                name="projectName"
                required
                fullWidth
                id="projectName"
                label="Project Name"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

           

            <Grid item xs={12} md={12} lg={12}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Blog description
              </Typography>
              
              <RichTextEditor
                id="rte"
                controls={[
                  ['bold', 'italic', 'underline', 'link', 'image'],
                  ['unorderedList', 'h1', 'h2', 'h3', 'h4'],
                  ['sup', 'sub'],
                  ['alignLeft', 'alignCenter', 'alignRight'],
                ]}
              />
            </Grid>

           

          
   
            <Grid item xs={12} md={12} lg={6}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Auther
              </Typography>
              
            
              <CategoriesSelect />
            </Grid>

          <MemberSelect />

            <Grid item xs={12} textAlign="end">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 1,
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important",
                }}
              >
                <AddIcon
                  sx={{
                    position: "relative",
                    top: "-2px",
                  }}
                  className='mr-5px'
                />{" "}
                Create Project
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  )
}

export default AddBlog;