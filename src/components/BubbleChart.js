import React, { useEffect, useState } from 'react'
import axios from '../axios/axios'
import styled from 'styled-components';

function BubbleChart() {

    const [data, setData] = useState([]);

    const mapDummyArray = [-40, 0, 40, 80, 120, 160, 200, 240, 280, 320];
    const mapDummyArrayX = [160, 140, 120, 100, 80, 60, 40, 20, 0];



    useEffect(()=>{
        const getValues = async () => {
            const response = await axios({
                method: 'get',
                url: `/v1/18936d28-2f79-4840-b146-5622e8ad1e77`
            }).then((res) => {
                console.log(res);
                setData(res.data)
            });
        }
        getValues();
    }, []);

    
    return (
        <Container>
            <Xaxis>
            compratio
                {
                    mapDummyArrayX.map((item) => (
                        <p>
                            - <a>{item}</a>
                        </p>
                    ))
                }
            </Xaxis>
             <Yaxis>
                 {
                     mapDummyArray.map((item) => (
                         <a>|
                             <p>{item}</p>
                         </a>
                         
                     ))
                 }
            </Yaxis>
            <Headcount>headcount</Headcount>
            {
                data.map((item) => (
                    <ChartEntity zeroY={(((100 - item.salary/2)/20) * 10) + 415} zeroX={(77 - item.salary/2)/2 + 77} xasis={item.headcount*2.7} yaxsis={((80 - item.compratio)/20)*107} size={item.salary/2} color={Math.floor(Math.random()*16777215).toString(16)}>
                        {item.title}
                    </ChartEntity>
                ))
            }

                

        </Container>
    )
}


const Container = styled.div`
    height: 1000px;
    width: 1000px;
    background-color: grey;
    position: relative;
`

const Xaxis = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    margin-left: 330px;

    p{
        flex:1;
        border-right: 4px solid black;
        width: 5px;
        margin-left: -5px;
        font-weight: bold;
        position: relative;
        a{
            position: absolute;
            margin-left: 10px;
            margin-bottom: 20px;
        }
    }
`
const Yaxis = styled.div`
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    width: 12px;
    border-bottom: 4px solid black;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    color: black;
    font-weight: 500;
    font-size: 25px;
    a{
        margin-bottom: 0;
        margin-bottom: -15px;
        position: relative;

        p{
            margin-top: 30px;
            position: absolute;
            font-size: 20px;
            top: 0;
        }
    }
`

const ChartEntity = styled.div`

    top: ${props => `calc(${props.zeroY}px + ${props.yaxsis}px)`};
    left: ${props => `calc(${props.zeroX}px + ${props.xasis}px)`};
    position: absolute;
    border: 1px solid black;
    border-radius: 100%;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    background-color: ${props => `#${props.color}`};
    overflow: auto;
`

const Headcount = styled.p`
    position: absolute;
    right: -10px;
    top:430px

`

export default BubbleChart
