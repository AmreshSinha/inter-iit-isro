import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import Switch from "../../components/Switch/Switch";
import Table from "../../components/Table/Table";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

function Prediction() {
    return (
        <>
            <Navbar />
            <MainWrapper>
                <UpperWrapper>
                    <AreaPlotWrapper>
                        <SwitchButtonWrapper>
                            <MapTitle>Map 1</MapTitle>
                            <Switch />
                        </SwitchButtonWrapper>
                        <ResponsiveContainer>
                            <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name">
                                <Label value="Time" fill="#F6C96F" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis label={{ value: 'Rate', fill:"#F6C96F", angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#FFCA00" fill="rgba(246, 201, 111, 0.3)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </AreaPlotWrapper>
                    <InformationCard>
                        <InformationTitle>Information</InformationTitle>
                    </InformationCard>
                </UpperWrapper>
                <TableWrapper>
                    <FilterWrapper>
                        <FilterButton>Filter</FilterButton>
                    </FilterWrapper>
                    {/* <FilterOptions></FilterOptions> */}
                    <TableMenu>
                        <p>Burst start coordinate (x)</p>
                        <p>Burst start coordinate (y)</p>
                        <p>Burst </p>
                    </TableMenu>
                    <Table></Table>
                </TableWrapper>
            </MainWrapper>
        </>
    )
}

export default Prediction;

const MainWrapper = styled.div`
    width: 100vw;
    height: fit-content;
`
const UpperWrapper = styled.div`
    margin-left: 118px;
    margin-right: 118px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 64px;
`

const AreaPlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:  center;
    width: 75%;
    height: 550px;
    background: rgba(237, 237, 237, 0.2);
    padding: 36px 49px;
    gap: 25px;
    border-radius: 18.56px;
`

const SimpleAreaChart = {
    width: '66.66%',
    height: '400px',
    padding: '10px'
}

const InformationCard = styled.div`
    width: 33.3%;
    height: 585px;
    background: rgba(237, 237, 237, 0.3);
    padding-top: 37px;
    padding-left: 29px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`

const SwitchButtonWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MapTitle = styled.div`
    font-size: 36px;
    font-weight: 500;
    color: #F6C96F;
`

const InformationTitle = styled.div`
    color: #F6C96F;
    font-size: 36px;
    font-weight: 500;
`

const TableWrapper = styled.div`
    margin-left: 120px;
    margin-right: 120px;
    margin-top: 36px;
`

const FilterWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    margin-bottom: 36px;
`

const FilterButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 18px 20px;
    border-radius: 8px;
    background: #F6C96F;
`

const TableMenu = styled.div`
    background: rgba(237, 237, 237, 0.3);
`