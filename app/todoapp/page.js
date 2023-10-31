"use client";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [taskData, setTaskData] = useState([]);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const fetchData = async () => {
    try {
      const userData = await axios.get("/api/todo");
       console.log(userData)
      setTaskData(userData.data.resp);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(taskData);
  const handletitle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const handletodo = async () => {
    // console.log(data)
    if (data.title && data.description) {
      try {
        const data1 = await axios.post("/api/todo", {
          task: data.title,
          description: data.description,
        });
        console.log(data1);
        if (data1.status == 201) {
          fetchData();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("please fill the required field");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item>
          <Typography variant="h4">My Todo App</Typography>
          <br />
          <Box>
            <TextField
              sx={{ pb: 2 }}
              placeholder="Enter Your Task"
              name="title"
              value={data.title}
              onChange={handletitle}
            />
            <br />
            <TextField
              sx={{ pb: 2 }}
              placeholder="Enter Your Description"
              name="description"
              value={data.description}
              onChange={handletitle}
            />
            <br />
            <Button sx={{ mb: 2 }} variant="contained" onClick={handletodo}>
              Add
            </Button>
          </Box>
        </Grid>
        <Box sx={{  }}>
            {taskData.map((ele) => {
              return (
                  <table border={ '1px solid red' }>
                    <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                    </tr> 
                    </thead>
                    <tbody>
                    <tr>
                    <td>{ele.task}</td>
                      <td>{ele.description}</td>
                    </tr>
                    </tbody>
                  </table>
              );
            })}
          </Box>
      </Grid>
    </>
  );
};

export default page;
