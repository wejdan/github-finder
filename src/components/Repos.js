import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Chart, Doughnut2D } from './Charts';
const Repos = () => {
  const {repos}=useGlobalContext()
const GetLanguages=()=>{
  let languges={}


  let chartData = []
  repos.map((repo)=>{
    if(repo.language ){
      if(repo.language in languges ){
        languges[repo.language]=languges[repo.language]+1
  
      }else{
        languges[repo.language]=1
  
      }
    }


  })
  for (let key in languges) {
    console.log(key, languges[key]);
    chartData.push({    label: key,value: languges[key]})
  }

  chartData.sort((a,b)=>(b.value-a.value))



  return chartData.slice(0,5);

}


const StartsPerLanguge=()=>{
  let languges={}

  let chartData = []
  repos.map((repo)=>{
    if(repo.language ){
      if(repo.language in languges ){
        languges[repo.language]=languges[repo.language]+repo.stargazers_count
  
      }else{
        languges[repo.language]=repo.stargazers_count
  
      }
    }


  })
  for (let key in languges) {
    console.log(key, languges[key]);
    chartData.push({    label: key,value: languges[key]})
  }
  chartData.sort((a,b)=>(b.value-a.value))


  return chartData.slice(0,5);;

}
const getPopular=(prop)=>{
  const chartData = []
  let popular=repos.sort((a, b) => parseInt(b[prop]) - parseInt(a[prop]))
popular = popular.slice(0, 5);
for (let index = 0; index < popular.length; index++) {
  const element = popular[index];
  chartData.push({    label: element.name,value:element[prop]})

  
}

return chartData

}
const Languagel=GetLanguages();

const popular=getPopular("forks_count")
const mostStars=getPopular("stargazers_count")
const strs_per_lng=StartsPerLanguge();
  return <section>
<Wrapper className='section-center'>
  <Chart data={Languagel} text="Languages"  type="pie3d" />
  <Chart data={mostStars} text="Most Popular"  yAxisName="Stars" xAxisName="Repos" type="column3d"   />
  <Chart data={strs_per_lng} text="Stars Per Language" showPercentValues="0" theme="candy" type="doughnut3d"   />


  <Chart data={popular} text="Most Forked" yAxisName="Forks" xAxisName="Repos" type="bar3d"   />


</Wrapper>

  </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
