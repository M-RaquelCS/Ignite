import { styled } from "..";

export const Container = styled("body", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	minHeight: "100vh",
});

export const HeaderStyled = styled("header", {
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",
});
