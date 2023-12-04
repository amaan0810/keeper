import * as React from 'react';
import {AppBar,Typography,IconButton,Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import "../App.css"

const Header = styled(AppBar)`
  z-index:1201;
  background-color:#fff;
  box-shadow:inset 0 -1 0 #dadce0;
`;

const Heading=styled(Typography)`
  color:#5F6368;
  font-family: 'Comic Neue', cursive;
  font-weight: 200;
  font-size: 24px;
  margin-left: 20px;
`;



const HeaderBar=({open, handleDrawer})=>{
  const logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAEHCAMAAADI2meYAAAAh1BMVEX7vAT////ymQD7ugD7uAD7vgT0oQH1pAL81oT+68f8zWjylQD7tgD//fj+7cz7wjL7wCH95bX80XH+9N7/+e3+57v0qkb81YH8yVH0rVD1sVv93Zv8xUH0rE392Ir1slz94KT8x0n/+On8zmz4ulf2qwv4v2z92pH+8NT803j+9+n8y1r+9OBDgCo2AAAEs0lEQVR4nO2d0XqjNhBGJUveJhgDJnZNGzdNNt3dZDfv/3w10DhgEywhfczM1/9c5fL8YZBkSR4r3WG72VeFmpF/dCjq48/dIbVmTnu1/PJ7NP+ssLO6N/6/rUIDvPuX6ez2tf8iNEDrv87n/+e3/qEBGv91MW/dd/0DAzT+OY1+6x8WoPYvSYrn5B8U4OifUby6Xf+QAEf/WWesQf+AAErvqKqn4z89gNIHMv2O/+QAaktW/T3/qQHUhq58ev6L1V+T/PdEY/+F/7QAqqLTP/OfFEDRjZ4X/lMCENpf+k8IwMvfPwAzf+8A3Px9A7Dz9wzAz98vAEN/rwAc/RerP2T7ezwBnv7uAZj6O5cQV3/XAGz9HQPw9XcLwNjfKQBnf5cArP0dAvD2vx6Auf/VANz9rwVg738lAH//8QAC/EcDSPAfCyDCfySADP/F6k/Z/p8+ASn+nwUQ4/9JCcnxHw4gyH8wgCT/oQCi/AcCyPK/DCDM/yKANP/zAOL8zwLI8+8HEOjfCyDRvxtApH8ngEz/jwBC/U8BpPovVn/L9v8vgFz/toQE+zdPgNh/FRqA1F99+xLG4jutv1oGQqwPAAAAAAAAAAAAekwNtcQUjLWpyaukLMukyk1qZ+4sEYSxJnnMtp1Tqm32mBgZEUxa/Hg5PyVvuPtRpNwjmLQclm95KVknMPZhO2Jfs37gW0bp6/qKfZPglfAb3yPY/M3BvuaNplvJOOm9o33NPbdHYJZ3HvrHsUixegvsk0vl93hiVEP22ddeE3ZducDuJ+hrvWcSYKI+lwCTiqflmUEA8zRZ//gSMxiFvEeeDmtqeZX6jfvn3BFPZNZn1h3invYVyAP1tc4p9QOrp4aygkwZrH+ch+nGoPTapxUX6BpAmakTbx+yDkpR/v10D8AkUfS1TmgegM0i+Wc0c8Aykr7WJNeQzE00/weKAopWPlq/UBSQjaavNYX/r4j+v+bXD155diFYhdrbiP638/unXyP6/5x/Co75+mo9v3+82atm/hnsENV//iawMYdPggE02uKzZfYlKPxp/aXXv/jxR/r4H3f+JVj//Iyo/5Vg/SN8/Sl9/S/985f4z7927KKMHyT7D+Yhmj/J/o9S18UcIbEXv/8pff9Z+v5/rB3cG7IDMBty9v7Omu4A0rxG8H8lvAMh/PxX/Pm7+PsP0u+fKOn3f+Tfv7LTL3HwuEJpp07DNyz0Jwfgoj+xhHgUT4t98tavGOnX989dL/+3vC0ZjDw9vO7/P9JPWxfYw40rB1a1c8K4Qi0KAAAAAAAarCvUosMk2a0bWUKtOoTHaQDdjv8I8KcF/rTAnxb40wJ/WuBPi8d9LKL7VlfInxM3nmnP3D8F+88AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/hIJaIIhCVdQKQVSK7NdjYmD2asP023BO2I2i+/mhCKRbRdB6OR4HrfRObgHZ3dFfyx1BC137Z1LfgDRr/Fl1QvKg6frUNIHNJc4Bpuld2PivC3kBTLE++es1x190HsXmbd+/9ybCpayXOH3veHZqgpwVch6BLU6tjztNnHeHlO9vs58wNj3sPqR7Tai3m33FezYrqv2m1/X4X/Y3Wvk+02zvAAAAAElFTkSuQmCC";
    return (
        <Header  open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            edge="start"
            sx={{ marginRight: "20px",}}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{width:30}}/>
          <Heading>Keeper</Heading>
        </Toolbar>
      </Header>
    )
}

export default HeaderBar;