import React from "react";
import { Grid, Paper } from "@mui/material";
import { LoginComponent } from "../login/component";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from "../../route/routes"
import axios from "axios";

const require_data = [
    "name", "description", "actorname", "actressname",
    "directorname", "track1", "track2",
    "releasedate", "Pre_release_business"
]

export const Form = () => {
    const navigate = useNavigate()
    const handleCreate = async (state) => {
        let validate = true;
        require_data.map(vl => {
            if (!state[vl]) {
                validate = false
            }
            return false
        })
        if (validate) {

            const { name, description, actorname, actressname,
                directorname, track1, track2,
                releasedate, Pre_release_business } = state;

            let movieData = { name, description },
                trackData = { track1, track2 },
                releaseData = { releasedate, Pre_release_business },
                castData = { actorname, actressname, directorname };

            await axios({
                method: 'post',
                url: process.env.REACT_APP_API_BASE_URL + "/movie/upsert",
                data: {
                    movieData, trackData, releaseData, castData
                }
            });
            navigate(AppRoutes.home);
        } else {
            enqueueSnackbar('Please fill all the data!', {
                variant: 'error',
                autoHideDuration: 5000
            })
        }
    }
    return <Grid container spacing={2} style={{ backgroundColor: "#d3d3d31a" }}>
        <SnackbarProvider />
        <Grid item md={6} sm={6} xs={12} style={{ margin: "0px auto" }}>
            <Paper style={{ padding: 20 }}>
                <LoginComponent
                    title='Create New Movie'
                    field={[
                        {
                            id: 0,
                            label: 'Movie Name',
                            type: 'text',
                            placeholder: 'Enter movie name',
                            fullWidth: true,
                            key: 'name',
                            value: ''
                        },
                        {
                            id: 1,
                            label: 'Description',
                            type: 'text',
                            placeholder: 'Enter descrition',
                            fullWidth: true,
                            key: 'description',
                            value: ''
                        },
                        {
                            id: 2,
                            type: 'paragraph',
                            label: "Cast"
                        },
                        {
                            id: 3,
                            label: 'Actor Name',
                            type: 'text',
                            placeholder: 'Enter actor name',
                            fullWidth: true,
                            key: 'actorname',
                            value: ''
                        },
                        {
                            id: 4,
                            label: 'Actress Name',
                            type: 'text',
                            placeholder: 'Enter actress name',
                            fullWidth: true,
                            key: 'actressname',
                            value: ''
                        },
                        {
                            id: 5,
                            label: 'Director Name',
                            type: 'text',
                            placeholder: 'Enter director name',
                            fullWidth: true,
                            key: 'directorname',
                            value: ''
                        },
                        {
                            id: 6,
                            type: 'paragraph',
                            label: "Track"
                        },
                        {
                            id: 7,
                            label: 'Track 1',
                            type: 'text',
                            placeholder: 'Enter first song',
                            fullWidth: true,
                            key: 'track1',
                            value: ''
                        },
                        {
                            id: 8,
                            label: 'Track 2',
                            type: 'text',
                            placeholder: 'Enter Second song',
                            fullWidth: true,
                            key: 'track2',
                            value: ''
                        },
                        {
                            id: 9,
                            type: 'paragraph',
                            label: "Release"
                        },
                        {
                            id: 10,
                            label: 'Release Date',
                            type: 'text',
                            placeholder: 'Enter release date',
                            fullWidth: true,
                            key: 'releasedate',
                            value: ''
                        },
                        {
                            id: 11,
                            label: 'Pre-release business',
                            type: 'text',
                            placeholder: 'Enter Pre-release business plan',
                            fullWidth: true,
                            key: 'Pre_release_business',
                            value: ''
                        },
                        {
                            id: 12,
                            type: 'button',
                            variant: 'contained',
                            color: 'primary',
                            textAlign: "right",
                            actionBtnName: 'Create',
                            fullWidth: false
                        }
                    ]}
                    onSubmit={handleCreate}
                />
            </Paper>
        </Grid>
    </Grid>

}