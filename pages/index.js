import React from 'react';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Features from "@/components/Dashboard/DahBoardAnal/Features";
import Ratings from "@/components/Dashboard/DahBoardAnal/Ratings";
import AudienceOverview from "@/components/Dashboard/DahBoardAnal/AudienceOverview";
import VisitsByDay from "@/components/Dashboard/DahBoardAnal/VisitsByDay";
import Impressions from "@/components/Dashboard/DahBoardAnal/Impressions";
import ActivityTimeline from "@/components/Dashboard/DahBoardAnal/ActivityTimeline";
import RevenuStatus from "@/components/Dashboard/DahBoardAnal/RevenuStatus";
import SalesByCountries from "@/components/Dashboard/DahBoardAnal/SalesByCountries";
import NewCustomers from "@/components/Dashboard/DahBoardAnal/NewCustomers";
import RecentOrders from "@/components/Dashboard/DahBoardAnal/RecentOrders";
import TeamMembersList from "@/components/Dashboard/DahBoardAnal/TeamMembersList";
import BestSellingProducts from "@/components/Dashboard/DahBoardAnal/BestSellingProducts";
import LiveVisitsOnOurSite from "@/components/Dashboard/DahBoardAnal/LiveVisitsOnOurSite";

export default function eCommerce() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>eCommerce</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            eCommerce
          </li>
        </ul>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* Features */}
          <Features />

          {/* AudienceOverview */}
          <AudienceOverview />

          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12} md={8}>
              {/* VisitsByDay */}
              <VisitsByDay />
            </Grid>

            <Grid item xs={12} md={4}>
              {/* Impressions */}
             

              {/* ActivityTimeline */}
             
            </Grid>

            <Grid item xs={12} md={12}>
              {/* RevenuStatus */}
              <RevenuStatus />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Ratings */}
          <Ratings />

          {/* LiveVisitsOnOurSite */}
        

          {/* SalesByLocations */}
        

          {/* NewCustomers */}
       
        </Grid>
      </Grid>

      {/* Recent Orders */}
     

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={8}>
          {/* TeamMembersList */}
         
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* BestSellingProducts */}
         
        </Grid>
      </Grid>
    </>
  );
}
