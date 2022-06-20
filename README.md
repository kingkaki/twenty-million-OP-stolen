# twenty-million-OP-stolen

## how to run

[alchemy页面](https://dashboard.alchemyapi.io/)申请一个 **Optimism Mainnet** 网络的API key

新建`.env`文件，value为自己的api key
```
ALCHEMY_API_KEY=xxxx
```

```bash
npm install
npx hardhat run scripts/exp.js
```
![](https://raw.githubusercontent.com/kingkaki/cloud-img/master/img/20220620162630.png)

由于hardhat网络auto automine的速度有点慢，需要批量创建大量的Proxy（大概等了半小时？）。
最终在8884的nonce的时候，创建出了对应的`GS Proxy`地址`0x4f3a120E72C76c22ae802D129F599BFDbc31cb81`
![](https://raw.githubusercontent.com/kingkaki/cloud-img/master/img/20220620162824.png)


## detail

技术原理就不多赘述，列几个关键的hash

- `GS: Proxy Factory`创建tx：0x75a42f240d229518979199f56cd7c82e4fc1f1a20ad9a4864c635354b4a34261
- `GS: Proxy Factory`合约地址：0x76e2cfc1f5fa8f6a5b3fc4c8f4788f0116861f9b
- `GS proxy`创建tx：0xd705178d68551a6a6f65ca74363264b32150857a26dd62c27f3f96b8ec69ca01
- `GS proxy`合约地址：0x4f3a120e72c76c22ae802d129f599bfdbc31cb81

由于合约地址仅取决于nonce和sender，因此OP链上`GS proxy`合约的生成，过程是：黑客创建了个辅助合约，在其中批量调用`createProxy`，直至nonce相等
- OP链`GS proxy`创建tx：0x00a3da68f0f6a69cb067f09c3f7e741a01636cbc27a84c603b468f65271d415b
- OP链辅助合约地址：0xe7145dd6287ae53326347f3a6694fcf2954bcd8a

创建`GS proxy`合约的nonce应该为8884

创建`GS: Proxy Factory`的raw transaction: https://etherscan.io/getRawTx?tx=0x75a42f240d229518979199f56cd7c82e4fc1f1a20ad9a4864c635354b4a34261