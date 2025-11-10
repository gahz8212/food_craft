import React from 'react';

type Props = {
    fromCurrency: string;
    searchCurrency: () => void;
    resultCurrency: { [key: string]: { [key: string]: number } } | null
}
const HomeComponent: React.FC<Props> = ({ fromCurrency, resultCurrency }) => {

    if (!resultCurrency) return null;
    return (<div style={{ margin: '7rem auto', width: '1000px', height: '2000px' }}>
        <div className="title">환율계산기</div>
        <div className="curr">

            <div className='currData'>
                <span className='unit'>1$</span>
                <span>\{(1 / resultCurrency![fromCurrency]!.usd).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className='currData'>
                <span className='unit'>1￥</span>
                <span>\{(1 / resultCurrency![fromCurrency]!.jpy).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className='outter' style={{ width: '300px', height: '300px', overflowY: 'auto' }} >
                <div className='inner' style={{ width: '270px', height: '1000px' }}></div>
            </div>
        </div>
    </div >)
};

export default HomeComponent;