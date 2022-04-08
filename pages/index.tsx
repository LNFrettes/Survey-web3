import {web, contract, getBalance, mintToken} from '../Components/Functional/connections';
import type { NextPage } from 'next';

import { Button, AppBar, Container } from '@mui/material';

import { useEffect, useState } from 'react';

import QuizScreen from '../Components/Visual/QuizScreen';

import SurveyData from '../Data/SurveyData.json'

import styles from '../styles/Home.module.css';



const Home: NextPage = () => { 

  const [buttonName, setButtonName] = useState('Connect Wallet')
  const [tokenbalance, setTokenbalance] = useState(0)
  const [ropsten, setRopsten] = useState(false)
  
  

  async function userBalance() {
    const userBalance = await  getBalance()
    setTokenbalance(userBalance)
  };

  async function conection() {
    if(!window.ethereum){
      alert('install metamask')
    }else{
     
        await window.ethereum.request({ method: 'eth_requestAccounts' });
          const net = await ethereum.request({ method: 'net_version' });
          if(net !== '3'){
            console.log('aoest')
            setRopsten(true)
            setTokenbalance(0)
            return
          }
          setRopsten(false)
          userBalance()
        } 
  }

  conection()
  
  async function changeToRopsten (){
    await ethereum.request({method: 'wallet_switchEthereumChain', params: [{"chainId": "0x3"}]});
    setRopsten(false)
    
  }
  
  if(typeof window !== "undefined"){
    window.ethereum.on('networkChanged', function(){
      conection()
    })
  };
    
  


    return (
        <div className={styles.container}>
            <AppBar position='static' >
              <p>balance: {tokenbalance}</p>
            </AppBar>
            <Container>
            <h1>RatherLabs Quiz</h1>
            <img src={SurveyData[0].image}></img>
            {ropsten ? <Button variant="contained" color="error" onClick={() => changeToRopsten() }>Change to Ropsten</Button>: null}
            {!ropsten ? <QuizScreen/> : null}
          </Container>
        </div>
    );
};

export default Home;


