/* global ethers */
/* eslint-disable  prefer-const */

async function main () {
  // let aavegotchiDiamondAddress = '0xd0576c4371bBb9e531700898760B0064237832Ee'
  let aavegotchiDiamondAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d'
  console.log(aavegotchiDiamondAddress)
  let svgFacet = await ethers.getContractAt('SvgFacet', aavegotchiDiamondAddress)
  // let bitbeast = await svgFacet.getAavegotchiSvg(8380)
  // console.log(bitbeast)

  // let bitbeast = await svgFacet.getAavegotchiSvg(3564)
  // pajamas:
  // let bitbeast = await svgFacet.getAavegotchiSvg(8120)
  // aagent
  // let bitbeast = await svgFacet.getAavegotchiSvg(9887)
  // uni eyes  5795
  // hawwain shirt
  // let bitbeast = await svgFacet.getAavegotchiSvg(301)
  // console.log(bitbeast)
  // 11 = robe
  // 13 = aagent shirt
  // let svgs = await svgFacet.getSvgs(ethers.utils.formatBytes32String('wearables'), [135])
  // let count = 0
  // for (const svg of svgs) {
  //   console.log(count)
  //   console.log(svg)
  //   count++
  //   console.log('  -   ')
  // }
  // let bitbeast = await svgFacet.getAavegotchiSvg(7274)
  // console.log(bitbeast)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
