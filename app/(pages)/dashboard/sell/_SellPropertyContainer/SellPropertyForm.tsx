import {
  cityData,
  localitiesInBhopalData,
  PropertyTypeOptionsData,
} from "@/constants/form.constants";
import {
  Autocomplete,
  Button,
  Card,
  Grid,
  GridCol,
  NumberInput,
  SegmentedControl,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Handshake } from "lucide-react";
import React from "react";

const SellPropertyForm = () => {
  return (
    <main className="flex flex-col gap-4 px-5 items-center">
      <nav className="flex flex-row items-center gap-2">
        <Handshake size={30} />
        <Title order={1}>Sell your property</Title>
      </nav>

      <section className="w-full">
        <CardHeading title="Property Details" />
        <Card shadow="lg" p={"lg"}>
          <Grid gutter={"lg"}>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Purpose"
                placeholder="Select Purpose"
                data={["Sale", "PG/Hostel", "Rent/Lease"]}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Property Type"
                placeholder="Select property type"
                data={PropertyTypeOptionsData}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <div>
                <Text size="sm">Total No of flats in your society</Text>
                <SegmentedControl
                  data={[
                    { value: "Less than 50", label: "Less than 50" },
                    {
                      value: "Between 50 and 100",
                      label: "Between 50 and 100",
                    },
                    { value: "More than 100", label: "More than 100" },
                  ]}
                  transitionDuration={200}
                  transitionTimingFunction="linear"
                />
              </div>
            </GridCol>
          </Grid>
        </Card>
      </section>
      <section className="w-full">
        <CardHeading title="Property Location" />
        <Card shadow="lg" p={"lg"}>
          <Grid gutter={"md"}>
            <GridCol span={{ base: 6 }}>
              <Autocomplete
                label="City"
                placeholder="Enter any city in madhya pradesh"
                data={cityData}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <TextInput
                label="Name of society/Colony"
                placeholder="Enter society name"
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Autocomplete
                label="Locality"
                placeholder="Enter any locality"
                data={localitiesInBhopalData}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
          </Grid>
        </Card>
      </section>
      <section className="w-full">
        <CardHeading title="Property Features" />
        <Card shadow="md">
          <Grid>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Bedrooms"
                placeholder="No of bedroom"
                data={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  ">10",
                ]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Balconies"
                placeholder="Enter any no of balconies"
                data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Total floors"
                placeholder="Enter any no of total floors"
                data={[
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                ]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <div>
                <Text size="sm" fw={500}>
                  Furnished Status
                </Text>
                <SegmentedControl
                  data={[
                    { value: "Furnished", label: "Furnished" },
                    {
                      value: "Unfurnished",
                      label: "Unfurnished",
                    },
                    { value: "Semi-furnished", label: "Semi-furnished" },
                  ]}
                  transitionDuration={200}
                  transitionTimingFunction="linear"
                />
              </div>
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Bathrooms"
                placeholder="Bathrooms"
                data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Select
                label="No of open sides"
                placeholder="Enter no of open sides"
                data={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
          </Grid>
        </Card>
      </section>
      <section className="w-full">
        <CardHeading title="Area" />
        <Card shadow="md">
          <Grid>
            <GridCol span={{ base: 6 }}>
              <div className="flex flex-row">
                <NumberInput placeholder="Plot Area" label="Plot Area" />
                <Select
                  label="Unit"
                  placeholder="Sq-ft"
                  data={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    ">10",
                  ]}
                  comboboxProps={{
                    transitionProps: { transition: "pop", duration: 200 },
                  }}
                />
              </div>
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <Select
                label="Is this a corner plot?"
                placeholder="Is this a corner plot"
                data={["Yes", "No"]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6 }}>
              <div className="flex flex-row gap-1">
                <NumberInput placeholder="Super Area" label="Super Area" />
                <Select
                  label="Unit"
                  placeholder="Sq-ft"
                  data={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    ">10",
                  ]}
                  comboboxProps={{
                    transitionProps: { transition: "pop", duration: 200 },
                  }}
                />
              </div>
            </GridCol>
          </Grid>
        </Card>
      </section>
      <section className="w-full">
        <CardHeading title="Transaction type, property availability" />
        <Card shadow="md">
          <Grid>
            <GridCol span={{ base: 6, md: 6, sm: 12 }}>
              <Select
                label="Unit"
                placeholder="Status"
                data={["Ready to Move", "Under Construction"]}
                comboboxProps={{
                  transitionProps: { transition: "pop", duration: 200 },
                }}
              />
            </GridCol>
            <GridCol span={{ base: 6, md: 6, sm: 12 }}>
              <div className="flex flex-row gap-1">
                <Select
                  label="Avaiable From Month"
                  placeholder="Month"
                  data={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ]}
                  comboboxProps={{
                    transitionProps: { transition: "pop", duration: 200 },
                  }}
                />
                <Select
                  label="Year"
                  placeholder="Year"
                  data={[
                    "2024",
                    "2025",
                    "2026",
                    "2027",
                    "2028",
                    "2029",
                    "2030",
                    "2031",
                    "2032",
                    "2033",
                  ]}
                  comboboxProps={{
                    transitionProps: { transition: "pop", duration: 200 },
                  }}
                />
              </div>
            </GridCol>
          </Grid>
        </Card>
      </section>
      <section className="w-full">
        <CardHeading title="Price Details" />
        <Card shadow="md">
          <Grid>
            <GridCol span={{ base: 6, md: 6, sm: 12 }}>
              <NumberInput
                label="Expected Price"
                placeholder="Enter expected price"
                clampBehavior="strict"
                allowNegative={false}
                min={0}
                thousandSeparator=","
                leftSection={"₹"}
              />
            </GridCol>
            <GridCol span={{ base: 6, md: 6, sm: 12 }}>
              <NumberInput
                label="Booking/Token amount (optional)"
                placeholder="Enter expected price"
                clampBehavior="strict"
                allowNegative={false}
                min={0}
                thousandSeparator=","
                leftSection={"₹"}
              />
            </GridCol>
          </Grid>
        </Card>
      </section>
      <section className="w-full">
        <CardHeading title="Photos" />
        <Card shadow="md">
          <Grid>
            <GridCol span={{ base: 12, md: 12, sm: 12 }}>
              <NumberInput
                label="Expected Price"
                placeholder="Enter expected price"
                clampBehavior="strict"
                allowNegative={false}
                min={0}
                thousandSeparator=","
                leftSection={"₹"}
              />
            </GridCol>
          </Grid>
        </Card>
      </section>

      <Button variant="gradient">Continue to post</Button>
    </main>
  );
};

export default SellPropertyForm;

export function CardHeading({ title }: { title: string }) {
  return <h1 className="text-xl font-semibold">{title}</h1>;
}
