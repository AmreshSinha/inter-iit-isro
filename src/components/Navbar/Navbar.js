import styled from "styled-components";

function Navbar() {
    return (
        <NavbarWrapper>
            <Title>IIT Guwahati</Title>
        </NavbarWrapper>
    );
}

export default Navbar;

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 120px;
`;

const Title = styled.h1`
    font-size: 36px;
`;