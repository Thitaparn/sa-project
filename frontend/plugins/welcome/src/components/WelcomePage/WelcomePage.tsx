import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ComponanceTable from '../Table';
import Button from '@material-ui/core/Button';

import {
  Content,
  Header,
  Page,
  pageTheme,
  ContentHeader,
  Link,
} from '@backstage/core';


const WelcomePage: FC<{}> = () => {
  return (
    <Page theme={pageTheme.service}>
      <Header
        title={"Dental System"}
        subtitle = {"ระบบประวัติผู้ป่วย"}
      ></Header>
      <Content>
        <ContentHeader title="ประวัติผู้ป่วย">
        <Link component={RouterLink} to="/MenuTab">
          <Button variant="contained" color="primary" disableElevation>
                กลับ
          </Button>
          </Link>
        </ContentHeader>
        <ComponanceTable></ComponanceTable>
      </Content>
    </Page>
  );
};

export default WelcomePage;
