'use client';
import React from "react";
import { TeamComplete, UserOrganization } from "@/interface/organization";
import { Avatar, Box, IconButton, Stack, Tab, Tabs, Typography, styled } from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { stringAvatar } from "@/utils/common";
import FullFeaturedCrudGrid from "@/components/Table";
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextPage } from "next";
import { useRouter } from 'next/navigation';
import BasicTable from "@/components/Table";
import 'swiper/css';

const Home: NextPage = () => {
  const [tabValue, setTabValue] = useState('All');
  const [swiper, setSwiper] = useState<any>(null);
  const router = useRouter()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const [tabList, setTabList] = useState([
    {
      name: 'All', code: 'All',
    },
    {
      name: 'Recently', code: 'Recently',
    },
    {
      name: 'New', code: 'New',
    },
    {
      name: 'Joined', code: 'Joined',
    }
  ])
  const [organiztion, setorganiztion] = useState<UserOrganization>(
    {
      "id": 1,
      "name": "Debate Corporation",
      "avatar": "https://example.com/images/acme-avatar.png",
      "description": "An innovative tech company focused on building",
      "ownerId": 123,
      "createdAt": "2024-02-27T15:00:00Z",
      "updatedAt": "2024-02-27T15:00:00Z",
      "status": "active",
      "teamIds": [10, 11, 12],
      "memberIds": [123, 124, 125, 126],
      teams: []
    })
  const [teamList, setTeamList] = useState<TeamComplete[]>(
    [
      {
        id: 15451436151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        totalMember: 4,
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 154514236151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 40,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 154351436151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 14,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 154451436151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 884,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
      {
        id: 15445143556151,
        name: "New Product Development Team",
        description: "A team dedicated to developing new and innov",
        organizationId: "60d4aaee5a5678d123456789",
        createdAt: "2024-02-28T12:00:00Z",
        updatedAt: "2024-02-28T12:00:00Z",
        totalMember: 884,
        members: [
          {
            userId: "5fd4a8c9b12345d6789fa1c3",
            joinedAt: "2024-02-28T13:00:00Z",
            role: "developer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
          {
            userId: "5fd4a8c9b12345d6789fa1d4",
            joinedAt: "2024-02-28T14:00:00Z",
            role: "designer"
          },
        ],
        teamLeaderId: "5fd4a8c9b12345d6789fa1c3"
      },
    ]
  )
  const Table = FullFeaturedCrudGrid(teamList)
  const handleToTeam = (id: number | string) => {
    router.push(`/team?id=${id}`)
  }
  const MyCard = styled('div')(({ theme }) =>
    theme.unstable_sx({
      padding: 2,
      pt: 1,
      borderRadius: 1,
      bgcolor: '#fff',
      cursor: 'pointer',
      ':hover': {
        boxShadow: 1
      }
    }),
  );
  return (
    <Box sx={{padding: 3}}>
      <Typography security='h1'>
        {organiztion.name}
      </Typography>
      <Typography component="div" sx={{color: '#2E2C34', fontSize: 14, mt: 2, fontWeight: 'bold'}}>
        often
      </Typography>
      <Box sx={{ margin: '12px 0' }}>
        <Swiper
          loop={false}
          slidesPerView={'auto'}
          spaceBetween={18}
          onSlideChange={() => { }}
          onSwiper={setSwiper}
          style={{ padding: '12px 0' }}
        >
          {teamList.map((item, index: number) => (
            <SwiperSlide key={index} style={{ width: '320px' }}>
              <MyCard onClick={() => {handleToTeam(item.id)}}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                </Box>
                <Typography component="div" sx={{ color: '#2E2C34', fontWeight: 'bold', fontSize: 18, }}>
                  {item.name}
                </Typography>
                <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginTop: '8px' }}>
                  Team ID: {item.id}
                </Typography>
                <Box sx={{ color: '#666', fontSize: '15px', mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography component="div" sx={{ color: '#84818A', fontSize: 14, pr: 1 }}>
                    {item.description}
                  </Typography>
                  <Stack direction="row" key={index} sx={{display: 'flex', alignItems: 'center'}}>
                    <Stack direction="row" key={index}>
                      {
                        item.members.map((member, cindex) => {
                          return (
                            cindex > 2 ? null :
                              <Box key={cindex} sx={{ marginRight: '-2px' }}><Avatar {...stringAvatar((member.userId).toString(), 'small')} key={cindex} /></Box>
                          )
                        })
                      }
                    </Stack>
                    <Typography component="div" sx={{ color: '#84818A', fontSize: 14, marginLeft: '6px' }}>
                      {item.totalMember}
                    </Typography>
                  </Stack>
                </Box>
              </MyCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example" sx={{ borderBottom: '1px solid #EBEAED', marginBottom: '20px' }}>
        {
          tabList.map((item, index) => {
            return <Tab label={item.name} key={index} value={item.code} sx={{fontSize: '14px', color: '#2E2C34', textTransform: 'none'}}/>
          })
        }
      </Tabs>
      <BasicTable />
    </Box>
  );
}

Home.displayName = 'Home'

export default Home
