import { Group, Title } from "@mantine/core";
import "./Header.css";

const Header = () : JSX.Element => {
    return (
        <div id="header">
            <Group position="center" spacing={"xl"}>
                <img
                    src={`${process.env.PUBLIC_URL}/startx-logo.jpg`}
                    id="logo"
                    alt="StartX Logo"
                />
                <Title order={1}>
                    Interview debrief platform
                </Title>
            </Group>
        </div>
    )
}

export default Header;