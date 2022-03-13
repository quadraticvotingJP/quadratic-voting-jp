import React from "react";
import { useTranslation } from "next-i18next";
// component
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AtAtag } from "@/components/atoms/AtAtag";

type Props = {};

// eslint-disable-next-line react/display-name
export const MoHeader: React.FC<Props> = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-indigo-400">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AtAtag title={t("header.siteName")} link={t("header.link")} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
