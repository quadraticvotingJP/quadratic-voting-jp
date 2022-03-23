import React from "react";
import { useTranslation } from "next-i18next";
// component
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { AtAtag } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
const MoHeader = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className=" bg-indigo-400">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AtAtag title={t("header.siteName")} link={t("header.link")} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
export default MoHeader;