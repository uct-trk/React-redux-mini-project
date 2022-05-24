import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
    const {signedOut} = props
    
  return (
    <>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFT5jWpZOIMyQ/profile-displayphoto-shrink_400_400/0/1613080447729?e=1658966400&v=beta&t=jRi96Pey2oNYApWLW0-jpa59zu39MMDr199dWDeRJFg"
        />
        <Dropdown pointing="top center" text="Uğurcan">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signedOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </>
  );
}
