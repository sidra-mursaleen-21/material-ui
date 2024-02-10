import "./index.css";
import ResponsiveAppBar from "./components/navbar";
import { Grid, ListItem, Stack, Typography } from "@mui/material";
import MediaCard from "./components/smallCard";
import ActionAreaCard from "./components/productCard";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Stack>
      {/* <SwipeableTextMobileStepper/> */}
      </Stack>
      <Stack
        gap={"10px"}
        direction={"row"}
        sx={{
          backgroundColor: "#feeaea",
          p: "15px",
          pb: "30px",
        }}
      >
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-50.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-51.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-52.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-53.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-54.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-55.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-56.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-57.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-58.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-59.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-60.avif"
          alt=""
        />
        <img
          style={{ cursor: "pointer" }}
          width={"90px"}
          src="/image-61.avif"
          alt=""
        />
      </Stack>
      <Stack
        sx={{
          backgroundColor: "whitesmoke",
        }}
      >
        <Stack height={"460px"} direction={"row"} padding={"10px"} gap={1.5}>
          <Stack
            gap={2}
            sx={{ backgroundColor: "white", p: 1.5, width: "380px" }}
          >
            <Typography fontWeight={"bold"} textTransform={"capitalize"}>
              more reasons to shop
            </Typography>
            <Stack height={190} gap={2} direction={"row"}>
              <img width={170} src="/image-1.avif" alt="product image" />
              <img width={170} src="/image-2.avif" alt="product image" />
            </Stack>
            <Stack height={190} gap={2} direction={"row"}>
              <img width={170} src="/image-3.avif" alt="product image" />
              <img width={170} src="/image-4.avif" alt="product image" />
            </Stack>
          </Stack>
          <Stack
            gap={2}
            sx={{ backgroundColor: "white", p: 1.5, width: "400px" }}
          >
            <Typography fontWeight={"bold"} textTransform={"capitalize"}>
              mega deals
            </Typography>
            <Stack gap={2} direction={"row"}>
              <MediaCard
                price="899"
                text="realme 11 pro sunrise belge dual sim 8GB RAM 256GB..."
                image="/image-5.jpg"
              />
              <MediaCard
                text="HIGHFLY AB coaster HLY-T1OOB"
                price="109"
                image="/image-6.jpg"
              />
            </Stack>
            <Stack gap={2} direction={"row"}>
              <MediaCard
                text="TOMMY HILFIGER MEN'S DECKER Black dial watch..."
                price="315"
                image="/image-7.jpg"
              />
              <MediaCard
                text="sony playStation 4 slim 1TB console with DUALSHOC..."
                price="855"
                image="/image-8.jpg"
              />
            </Stack>
          </Stack>
          <Stack
            gap={2}
            sx={{ backgroundColor: "white", p: 1.5, width: "400px" }}
          >
            <Typography fontWeight={"bold"} textTransform={"capitalize"}>
              in focus
            </Typography>
            <img src="/image-9.avif" alt="" />
            <img src="/image-10.avif" alt="" />
          </Stack>
        </Stack>
        <Typography fontWeight={"bold"} sx={{ my: 1, mx: 2 }} variant="h5">
          Recommended for you
        </Typography>
        <Stack
          backgroundColor="#f1f4fd"
          p={"15px"}
          gap="12px"
          direction={"row"}
        >
          <ActionAreaCard
            title="apple iphone 14 pro max 256GB deep purple 5G w..."
            image="/image-11.avif"
            price="4,645"
          />

          <ActionAreaCard
            title="sony playstation 5 console (Disc Version) with contro..."
            image="/image-12.avif"
            price="1,823"
          />
          <ActionAreaCard
            title="T500 bluethoot full.Touch call smartwatch with repl..."
            image="/image-13.avif"
            price="16"
          />
          <ActionAreaCard
            title="apple iphone 11 white 128GB 4G LTE (2020-Sli..."
            price="69"
            image="/image-14.avif"
          />
          <ActionAreaCard
            title="kIKO MILANO unlimited double touch liquid lip c..."
            image="/image-15.avif"
            price="1,949"
          />
          <ActionAreaCard
            title="apple iphone 14 pro maxx 256GB deep purple 5G w..."
            image="/image-16.avif"
            price="4,855"
          />
        </Stack>
      </Stack>
      <Typography fontWeight={"bold"} sx={{ my: 1, mx: 2 }} variant="h5">
        Trending deals in electronics
      </Typography>
      <Stack p={"15px"} gap="12px" direction={"row"}>
        <ActionAreaCard
          title="sony playstation 5 slim console disc version with..."
          image="/image-17.avif"
          price="1,699"
        />

        <ActionAreaCard
          title="nintendo switch OLED (2021) model-black & wh..."
          image="/image-18.avif"
          price="949"
        />
        <ActionAreaCard
          title="sumsung 65 inch crystal UHD 4K smart TV 2023 6..."
          image="/image-19.avif"
          price="1,610"
        />
        <ActionAreaCard
          title="samsung galaxy S23 ultra 5G dual SIM green 12GB..."
          price="3,115"
          image="/image-20.avif"
        />
        <ActionAreaCard
          title="sony dualsense wireless controller for playstation..."
          image="/image-21.avif"
          price="215"
        />
        <ActionAreaCard
          title="apple macbook air MGN63 13 display.Apple M1 chip..."
          image="/image-22.avif"
          price="2,864"
        />
      </Stack>
      <Typography fontWeight={"bold"} sx={{ my: 1, mx: 2 }} variant="h5">
        Clearance deals
      </Typography>
      <Stack p={"15px"} gap="12px" direction={"row"}>
        <ActionAreaCard
          title="sony playstation 5 slim console disc version with..."
          image="/image-23.avif"
          price="1,699"
        />
        <ActionAreaCard
          title="nintendo switch OLED (2021) model-black & wh..."
          image="/image-24.avif"
          price="949"
        />
        <ActionAreaCard
          title="sumsung 65 inch crystal UHD 4K smart TV 2023 6..."
          image="/image-25.avif"
          price="1,610"
        />
        <ActionAreaCard
          title="samsung galaxy S23 ultra 5G dual SIM green 12GB..."
          price="3,115"
          image="/image-26.avif"
        />
        <ActionAreaCard
          title="sony dualsense wireless controller for playstation..."
          image="/image-27.avif"
          price="215"
        />
        <ActionAreaCard
          title="apple macbook air MGN63 13 display.Apple M1 chip..."
          image="/image-28.avif"
          price="2,864"
        />
      </Stack>
      <Stack>
        <Typography fontWeight={"bold"} sx={{ my: 1, mx: 2 }} variant="h5">
          Women's fashion
        </Typography>
        <Stack gap={"12px"} direction={"row"} px={"15px"}>
          <img
            width={"160px"}
            height={"260px"}
            src="/image-29.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-30.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-31.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-32.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-33.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-34.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-35.avif"
            alt="catagory"
          />
        </Stack>
        <Typography fontWeight={"bold"} sx={{ my: 1, mx: 2 }} variant="h5">
          Men's fashion
        </Typography>
        <Stack gap={"12px"} direction={"row"} px={"15px"}>
          <img
            width={"160px"}
            height={"260px"}
            src="/image-36.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-37.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-38.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-39.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-40.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-41.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-42.avif"
            alt="catagory"
          />
        </Stack>
        <Typography fontWeight={"bold"} sx={{ my: 1, mx: 2 }} variant="h5">
          Kid's fashion
        </Typography>
        <Stack gap={"12px"} direction={"row"} px={"15px"}>
          <img
            width={"160px"}
            height={"260px"}
            src="/image-43.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-44.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-45.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-46.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-47.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-48.avif"
            alt="catagory"
          />
          <img
            width={"160px"}
            height={"260px"}
            src="/image-49.avif"
            alt="catagory"
          />
        </Stack>
      </Stack>
      <Grid
        sx={{
          pb: "40px",
          pt: "15px",
          color: "grey",
          marginTop: "0px",
          fontSize: "14px",
          backgroundColor: "whitesmoke",
        }}
        container
      >
        <Grid item xs={1.8}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              electronics
            </ListItem>
            <ListItem>Mobiles</ListItem>
            <ListItem>Tablets</ListItem>
            <ListItem>Laptops</ListItem>
            <ListItem>Home Appliances</ListItem>
            <ListItem>Camera,Photo & Vedio</ListItem>
            <ListItem>Television</ListItem>
            <ListItem>Headphones</ListItem>
            <ListItem>Vedio Games</ListItem>
            <ListItem>Best Mobile Phones</ListItem>
          </ul>
        </Grid>
        <Grid sx={{ textTransform: "capitalize" }} item xs={1.5}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              fashion
            </ListItem>
            <ListItem>women's fashion</ListItem>
            <ListItem>men's fashion</ListItem>
            <ListItem>girl's fashion</ListItem>
            <ListItem>boy's fashion</ListItem>
            <ListItem>watches</ListItem>
            <ListItem>jewellery</ListItem>
            <ListItem>women's handbags</ListItem>
            <ListItem>men's eyewear</ListItem>
          </ul>
        </Grid>
        <Grid sx={{ textTransform: "capitalize" }} item xs={1.9}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              home & kitchen
            </ListItem>
            <ListItem>Bath</ListItem>
            <ListItem>Home Decor</ListItem>
            <ListItem>kitchen & dining</ListItem>
            <ListItem>tools & home improvement</ListItem>
            <ListItem>Audio & Vedio</ListItem>
            <ListItem>Furniture</ListItem>
            <ListItem>patio, lawn & garden</ListItem>
            <ListItem>pet supplies</ListItem>
          </ul>
        </Grid>
        <Grid sx={{ textTransform: "capitalize" }} item xs={1.8}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              beauty
            </ListItem>
            <ListItem>fragrance</ListItem>
            <ListItem>make up</ListItem>
            <ListItem>haircare</ListItem>
            <ListItem>skincare</ListItem>
            <ListItem>bath & body</ListItem>
            <ListItem>electronic beauty tools</ListItem>
            <ListItem>men's grooming</ListItem>
            <ListItem>health care essentials</ListItem>
          </ul>
        </Grid>
        <Grid sx={{ textTransform: "capitalize" }} item xs={1.8}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              baby & toys
            </ListItem>
            <ListItem>diapering</ListItem>
            <ListItem>baby transport</ListItem>
            <ListItem>nursing & feeding</ListItem>
            <ListItem>baby & kid's fashion</ListItem>
            <ListItem>baby and toddler toys</ListItem>
            <ListItem>tricycles and scooters</ListItem>
            <ListItem>board games & cards</ListItem>
            <ListItem>outdoor play</ListItem>
          </ul>
        </Grid>
        <Grid sx={{ textTransform: "capitalize" }} item xs={1.5}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              top brands
            </ListItem>
            <ListItem>pampers</ListItem>
            <ListItem>apple</ListItem>
            <ListItem>nike</ListItem>
            <ListItem>samsung</ListItem>
            <ListItem>tefal</ListItem>
            <ListItem>L'Oreal paris</ListItem>
            <ListItem>skeachers</ListItem>
            <ListItem>BLACK+DECKER</ListItem>
            <ListItem>saudi pro league</ListItem>
            <ListItem>velentine's offers</ListItem>
          </ul>
        </Grid>
        <Grid sx={{ textTransform: "capitalize" }} item xs={1.6}>
          <ul>
            <ListItem
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              daily groceries
            </ListItem>
            <ListItem>fresh produce</ListItem>
            <ListItem>dairy & eggs</ListItem>
            <ListItem>bread & bakery</ListItem>
            <ListItem>meat & seafood</ListItem>
            <ListItem>breakfast food</ListItem>
            <ListItem>pantry staples</ListItem>
            <ListItem>household supplies</ListItem>
            <ListItem>personal care</ListItem>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
