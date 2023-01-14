import styled from "@emotion/styled";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const ArrowTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#000000",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    marginTop: "16px !important",
    textAlign: "center",
    fontSize: "12px",
    backgroundColor: "#000000",
    fontFamily: "Poppins, sans-serif",
  },
}));

export default ArrowTooltip;
