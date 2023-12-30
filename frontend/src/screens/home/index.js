import * as React from 'react';
import { TopNavBar, ListData } from "../../components";
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from "../../route/routes"
import {
    Grid, Button, Pagination, Stack
} from '@mui/material';
import axios from 'axios';
import Empty from "../../assets/empty.png"

export function Home() {
    const navigate = useNavigate()
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([]);
    const [pageCount, setPageCount] = React.useState(1);
    const changePagination = (e, value) => {
        let count = (value-1) * 10;
        intialFetch(count, 10)
        setPage(value)
    }
    const handleCreate = () => {
        navigate(AppRoutes.form)
    }
    const intialFetch = (offset, limit) => {
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL + "/movie/view",
            data: {
                "filter":{
                    offset:offset,
                    limit: limit
                }
            }
        }).then(res => {
            let data = res?.data?.[0] ?? {};
            let pagination = data?.pagination?.[0]?.total ?? 0;
            let list = data?.data ?? [];
            setData(list)
            let balance = pagination % 10;
            let tot = Math.floor(pagination / 10);
            if(balance > 0){
                tot += 1;
            }
            setPageCount(tot)
        });
    }
    React.useEffect(() => {
        intialFetch(0, 10)
    }, [])
    return (
        <div>
            <div style={{ height: 70 }}>
                <TopNavBar />
            </div>
            <Grid spacing={4} style={{ padding: 25 }}>
                <div style={{ height: 50 }}>
                    <Button variant="outlined" style={{ float: "right" }} onClick={() => handleCreate()}>Create New Movie</Button>
                </div>
                {data.length > 0 && <ListData data={data} />}
                {data.length === 0 && 
                <div style={{ display:'flex' }}>
                    <img src={Empty} alt="empty" style={{ width: "39%", margin:"auto" }} />
                </div>}
                {data.length > 0 && <Stack spacing={2} alignItems={'flex-end'}>
                    <Pagination count={pageCount} onChange={changePagination} defaultPage={page} shape="rounded" color="primary" />
                </Stack>}
            </Grid>
        </div>
    );
}
