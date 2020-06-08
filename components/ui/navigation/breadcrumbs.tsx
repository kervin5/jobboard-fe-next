import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

interface IBreadCrumbs {
  className?: string;
}

const breadcrumbs: React.FunctionComponent<IBreadCrumbs> = ({
  className = "",
}) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      className={className}
    >
      <Link color="inherit" href="/" onClick={console.log}>
        Material-UI
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={console.log}
      >
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
};

export default breadcrumbs;
