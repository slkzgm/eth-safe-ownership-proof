const {MongoClient} = require("mongodb");
const { v4: uuidv4 } = require('uuid');

async function isAuthCodeOnOpenseaBio(walletAddress, authCode) {
    try {
        const request = await fetch("https://opensea.io/__api/graphql/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-app-id": "opensea-web",
                "x-build-id": "5046daf48d76acb382c9a9b7caa50e48771a2702",
                "x-signed-query": "43ed3bf19b2cc663121c6d686d0ed960b938b450f8aeb0daafab3ff9d2f79db4"
            },
            "referrer": "https://opensea.io/",
            "referrerPolicy": "strict-origin",
            "body": JSON.stringify(
                {
                    "id":"DefaultAccountPageQuery",
                    "query":"query DefaultAccountPageQuery(\n  $identity: IdentityInputType!\n  $includePrivateAssetCount: Boolean!\n) {\n  ...ProfileContainer_data_1QDmLU\n  account(identity: $identity) {\n    relayId\n    ...profilePageQueries_featured_3z3gbW\n    id\n  }\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AccountTrackingContext_account on AccountType {\n  relayId\n  address\n  displayName\n}\n\nfragment AddToCartAndQuickBuyButton_order on OrderV2Type {\n  ...useIsQuickBuyEnabled_order\n  ...ItemAddToCartButton_order\n  ...QuickBuyButton_order\n}\n\nfragment ApplyForVerificationBanner_data on AccountType {\n  canViewVerificationForm\n  config\n  verificationRequest {\n    status\n    id\n  }\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n  ...AssetMediaContainer_asset\n  ...AssetMediaPlaceholderImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_1mZMwQ\n  collection {\n    ...useIsRarityEnabled_collection\n    id\n  }\n}\n\nfragment AssetMediaContainer_asset_1LNk0S on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_1mZMwQ\n  collection {\n    ...useIsRarityEnabled_collection\n    id\n  }\n}\n\nfragment AssetMediaContainer_asset_4a3mm5 on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_1mZMwQ\n  defaultRarityData {\n    ...RarityIndicator_data\n    id\n  }\n  collection {\n    ...useIsRarityEnabled_collection\n    id\n  }\n}\n\nfragment AssetMediaEditions_asset_1mZMwQ on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_1LNk0S\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetMedia_asset_1mZMwQ on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_1LNk0S\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetMedia_asset_5MxNd on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_4a3mm5\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetQuantity_data on AssetQuantityType {\n  asset {\n    ...Price_data\n    id\n  }\n  quantity\n}\n\nfragment AssetSearchListViewTableAssetInfo_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ...PortfolioTableItemCellTooltip_item\n}\n\nfragment AssetSearchListViewTableQuickBuy_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  relayId\n}\n\nfragment BulkPurchaseModal_orders on OrderV2Type {\n  relayId\n  item {\n    __typename\n    relayId\n    chain {\n      identifier\n    }\n    ... on AssetType {\n      collection {\n        slug\n        isSafelisted\n        id\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  payment {\n    relayId\n    symbol\n    id\n  }\n  ...useTotalPrice_orders\n  ...useFulfillingListingsWillReactivateOrders_orders\n}\n\nfragment CampaignAnnouncementModal_data on Query {\n  campaignAnnouncementModal {\n    campaignId\n    title\n    description\n    overrideUrl\n    ctaText\n    ctaUrl\n    id\n  }\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  slug\n  verificationStatus\n  ...collection_url\n}\n\nfragment CollectionTrackingContext_collection on CollectionType {\n  relayId\n  slug\n  isVerified\n  isCollectionOffersEnabled\n  defaultChain {\n    identifier\n  }\n}\n\nfragment CreateListingButton_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...CreateQuickSingleListingFlowModal_asset\n  }\n  ...itemEvents_dataV2\n  ...item_sellUrl\n}\n\nfragment CreateQuickSingleListingFlowModal_asset on AssetType {\n  relayId\n  chain {\n    identifier\n  }\n  ...itemEvents_dataV2\n}\n\nfragment EditListingButton_item on ItemType {\n  __isItemType: __typename\n  chain {\n    identifier\n  }\n  ...EditListingModal_item\n  ...itemEvents_dataV2\n}\n\nfragment EditListingButton_listing on OrderV2Type {\n  ...EditListingModal_listing\n}\n\nfragment EditListingModal_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    tokenId\n    assetContract {\n      address\n      id\n    }\n    chain {\n      identifier\n    }\n  }\n  ... on AssetBundleType {\n    slug\n  }\n}\n\nfragment EditListingModal_listing on OrderV2Type {\n  relayId\n}\n\nfragment FeaturedShelfAssets_data_3z3gbW on AccountShelfType {\n  shelfAssets {\n    id\n    displayOrder\n    asset {\n      id\n      name\n      displayImageUrl\n      ...asset_url\n    }\n    ...PhoenixAsset_data_3z3gbW\n  }\n}\n\nfragment ItemAddToCartButton_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    ... on AssetType {\n      isCurrentlyFungible\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  ...ShoppingCartContextProvider_inline_order\n}\n\nfragment ItemCardContent on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    relayId\n    name\n    ...AssetMedia_asset_1mZMwQ\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            ...AssetMedia_asset\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ItemCardContent_1mZMwQ on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    relayId\n    name\n    ...AssetMedia_asset_1mZMwQ\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            ...AssetMedia_asset\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ItemCardCta_item_2qvZ6X on ItemType {\n  __isItemType: __typename\n  __typename\n  orderData {\n    bestAskV2 {\n      ...AddToCartAndQuickBuyButton_order\n      ...EditListingButton_listing\n      ...QuickBuyButton_order\n      id\n    }\n  }\n  ...useItemCardCta_item_2qvZ6X\n  ...itemEvents_dataV2\n  ...CreateListingButton_item\n  ...EditListingButton_item\n}\n\nfragment ItemCardFooter_2YN2Q8 on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  name\n  orderData {\n    bestBidV2 {\n      orderType\n      priceType {\n        unit\n      }\n      ...ItemCardPrice_data\n      id\n    }\n    bestAskV2 {\n      ...ItemCardFooter_bestAskV2\n      id\n    }\n  }\n  ...ItemMetadata_2JGaZg\n  ... on AssetType {\n    tokenId\n    isDelisted\n    defaultRarityData {\n      ...RarityIndicator_data\n      id\n    }\n    collection {\n      slug\n      name\n      isVerified\n      ...collection_url\n      ...useIsRarityEnabled_collection\n      id\n    }\n    largestOwner {\n      owner {\n        ...AccountLink_data\n        id\n      }\n      id\n    }\n    ...AssetSearchListViewTableAssetInfo_item\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      slug\n      name\n      isVerified\n      ...collection_url\n      ...useIsRarityEnabled_collection\n      id\n    }\n  }\n  ...useItemCardCta_item_2qvZ6X\n  ...item_url\n  ...ItemCardContent\n}\n\nfragment ItemCardFooter_bestAskV2 on OrderV2Type {\n  orderType\n  priceType {\n    unit\n  }\n  maker {\n    address\n    id\n  }\n  ...ItemCardPrice_data\n  ...ItemAddToCartButton_order\n  ...AssetSearchListViewTableQuickBuy_order\n  ...useIsQuickBuyEnabled_order\n}\n\nfragment ItemCardPrice_data on OrderV2Type {\n  perUnitPriceType {\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    symbol\n    id\n  }\n  ...useIsQuickBuyEnabled_order\n}\n\nfragment ItemCard_data_3z3gbW on ItemType {\n  __isItemType: __typename\n  __typename\n  relayId\n  chain {\n    identifier\n  }\n  orderData {\n    bestAskV2 {\n      priceType {\n        eth\n      }\n      id\n    }\n  }\n  ... on AssetType {\n    isDelisted\n    totalQuantity\n    collection {\n      slug\n      ...CollectionTrackingContext_collection\n      id\n    }\n    ...itemEvents_data\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      slug\n      ...CollectionTrackingContext_collection\n      id\n    }\n  }\n  ...ItemCardContent_1mZMwQ\n  ...ItemCardFooter_2YN2Q8\n  ...ItemCardCta_item_2qvZ6X\n  ...item_url\n  ...ItemTrackingContext_item\n}\n\nfragment ItemMetadata_2JGaZg on ItemType {\n  __isItemType: __typename\n  __typename\n  orderData {\n    bestAskV2 {\n      openedAt\n      createdDate\n      closedAt\n      id\n    }\n  }\n  assetEventData {\n    lastSale {\n      unitPriceQuantity {\n        ...AssetQuantity_data\n        quantity\n        asset {\n          symbol\n          decimals\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment ItemTrackingContext_item on ItemType {\n  __isItemType: __typename\n  relayId\n  verificationStatus\n  chain {\n    identifier\n  }\n  ... on AssetType {\n    tokenId\n    isReportedSuspicious\n    assetContract {\n      address\n      id\n    }\n  }\n  ... on AssetBundleType {\n    slug\n  }\n}\n\nfragment OrderListItem_order on OrderV2Type {\n  relayId\n  makerOwnedQuantity\n  item {\n    __typename\n    displayName\n    ... on AssetType {\n      assetContract {\n        ...CollectionLink_assetContract\n        id\n      }\n      collection {\n        ...CollectionLink_collection\n        id\n      }\n      ...AssetMedia_asset\n      ...asset_url\n      ...useItemFees_item\n    }\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              displayName\n              relayId\n              assetContract {\n                ...CollectionLink_assetContract\n                id\n              }\n              collection {\n                ...CollectionLink_collection\n                id\n              }\n              ...StackedAssetMedia_assets\n              ...AssetMedia_asset\n              ...asset_url\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ...itemEvents_dataV2\n    ...useIsItemSafelisted_item\n    ...ItemTrackingContext_item\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  remainingQuantityType\n  ...OrderPrice\n}\n\nfragment OrderList_orders on OrderV2Type {\n  item {\n    __typename\n    ... on AssetType {\n      __typename\n      relayId\n    }\n    ... on AssetBundleType {\n      __typename\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  relayId\n  ...OrderListItem_order\n  ...useFulfillingListingsWillReactivateOrders_orders\n}\n\nfragment OrderPrice on OrderV2Type {\n  priceType {\n    unit\n  }\n  perUnitPriceType {\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment PhoenixAddressPill_data on AccountType {\n  address\n  names {\n    name\n    type\n  }\n}\n\nfragment PhoenixAsset_data_3z3gbW on AccountShelfAssetType {\n  asset {\n    ...ItemCard_data_3z3gbW\n    id\n  }\n}\n\nfragment PhoenixHeader_account on AccountType {\n  config\n  displayName\n  isCompromised\n}\n\nfragment PhoenixProfileImage_data on AccountType {\n  ...ProfileImage_data\n  imageUrl\n  user {\n    publicUsername\n    id\n  }\n  displayName\n}\n\nfragment PhoenixSubheader_account on AccountType {\n  user {\n    dateJoined\n    id\n  }\n  ...PhoenixAddressPill_data\n}\n\nfragment PortfolioTableItemCellTooltip_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ...AssetMedia_asset_5MxNd\n  ...PortfolioTableTraitTable_asset\n  ...asset_url\n}\n\nfragment PortfolioTableTraitTable_asset on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  isCurrentlyFungible\n  tokenId\n}\n\nfragment Price_data on AssetType {\n  decimals\n  symbol\n  usdSpotPrice\n}\n\nfragment ProfileActionBar_data on AccountType {\n  relayId\n  address\n  names {\n    name\n    type\n  }\n  ...accounts_url\n}\n\nfragment ProfileContainer_data_1QDmLU on Query {\n  account(identity: $identity) {\n    address\n    bannerImageUrl\n    displayName\n    user {\n      username\n      publicUsername\n      id\n    }\n    metadata {\n      isBanned\n      isDisabled\n    }\n    ...PhoenixHeader_account\n    ...ProfileInfo_data\n    ...PhoenixSubheader_account\n    ...ApplyForVerificationBanner_data\n    ...ProfileActionBar_data\n    ...PhoenixProfileImage_data\n    ...socialLinksData\n    ...profilePageQueries_account_8v4Bz\n    ...profilePageQueries_featured_3z3gbW\n    ...AccountTrackingContext_account\n    id\n  }\n  ...CampaignAnnouncementModal_data\n  ...ProfileMetadata_data_1dpGHs\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment ProfileInfo_data on AccountType {\n  bio\n}\n\nfragment ProfileMetadata_data_1dpGHs on Query {\n  account(identity: $identity) {\n    address\n    user {\n      publicUsername\n      id\n    }\n    id\n  }\n  collection {\n    name\n    id\n  }\n}\n\nfragment QuickBuyButton_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  relayId\n}\n\nfragment RarityIndicator_data on RarityDataType {\n  rank\n  rankPercentile\n  rankCount\n  maxRank\n}\n\nfragment ShoppingCartContextProvider_inline_order on OrderV2Type {\n  relayId\n  makerOwnedQuantity\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    relayId\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  maker {\n    relayId\n    id\n  }\n  priceType {\n    usd\n  }\n  payment {\n    relayId\n    id\n  }\n  remainingQuantityType\n  ...useTotalItems_orders\n  ...ShoppingCart_orders\n}\n\nfragment ShoppingCartDetailedView_orders on OrderV2Type {\n  relayId\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  supportsGiftingOnPurchase\n  ...useTotalPrice_orders\n  ...OrderList_orders\n}\n\nfragment ShoppingCart_orders on OrderV2Type {\n  ...ShoppingCartDetailedView_orders\n  ...BulkPurchaseModal_orders\n}\n\nfragment StackedAssetMedia_assets on AssetType {\n  relayId\n  ...AssetMedia_asset\n  collection {\n    logo\n    id\n  }\n}\n\nfragment TokenPricePayment on PaymentAssetType {\n  symbol\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment bundle_url on AssetBundleType {\n  slug\n  chain {\n    identifier\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment itemEvents_dataV2 on ItemType {\n  __isItemType: __typename\n  relayId\n  chain {\n    identifier\n  }\n  ... on AssetType {\n    tokenId\n    assetContract {\n      address\n      id\n    }\n  }\n}\n\nfragment item_sellUrl on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    slug\n    chain {\n      identifier\n    }\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment item_url on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    ...bundle_url\n  }\n}\n\nfragment profilePageQueries_account_8v4Bz on AccountType {\n  user {\n    favoriteAssetCount\n    id\n  }\n  privateAssetCount @include(if: $includePrivateAssetCount)\n}\n\nfragment profilePageQueries_featured_3z3gbW on AccountType {\n  shelves {\n    id\n    name\n    description\n    displayOrder\n    shelfAssets {\n      id\n    }\n    ...FeaturedShelfAssets_data_3z3gbW\n  }\n}\n\nfragment socialLinksData on AccountType {\n  metadata {\n    instagramUsername\n    twitterUsername\n    websiteUrl\n  }\n  connectedTwitterUsername\n  connectedInstagramUsername\n}\n\nfragment useFulfillingListingsWillReactivateOrders_orders on OrderV2Type {\n  ...useTotalItems_orders\n}\n\nfragment useIsItemSafelisted_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    collection {\n      slug\n      verificationStatus\n      id\n    }\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 30) {\n      edges {\n        node {\n          asset {\n            collection {\n              slug\n              verificationStatus\n              id\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useIsQuickBuyEnabled_order on OrderV2Type {\n  orderType\n  item {\n    __typename\n    ... on AssetType {\n      isCurrentlyFungible\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment useIsRarityEnabled_collection on CollectionType {\n  slug\n  enabledRarities\n}\n\nfragment useItemCardCta_item_2qvZ6X on ItemType {\n  __isItemType: __typename\n  __typename\n  chain {\n    identifier\n  }\n  orderData {\n    bestAskV2 {\n      orderType\n      maker {\n        address\n        id\n      }\n      id\n    }\n  }\n  ... on AssetType {\n    isDelisted\n    isListable\n    isCurrentlyFungible\n  }\n}\n\nfragment useItemFees_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    totalCreatorFee\n    collection {\n      openseaSellerFeeBasisPoints\n      isCreatorFeesEnforced\n      id\n    }\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      openseaSellerFeeBasisPoints\n      totalCreatorFeeBasisPoints\n      isCreatorFeesEnforced\n      id\n    }\n  }\n}\n\nfragment useTotalItems_orders on OrderV2Type {\n  item {\n    __typename\n    relayId\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment useTotalPrice_orders on OrderV2Type {\n  relayId\n  perUnitPriceType {\n    usd\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    usd\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    symbol\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n",
                    "variables":{"identity":{"address": walletAddress},"includePrivateAssetCount":false}
                }),
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        const openseaBio = (await request.json()).data?.account?.bio;

        if (!openseaBio) {
            throw new Error('Unable to retrieve Opensea bio');
        } else if (!openseaBio.includes(authCode)) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        throw new Error(`Failed to verify auth code on OpenSea: ${e.message}`);
    }
}

class Web3SafeAuth {
    constructor({ dbUrl, databaseName, collectionName, authRetryInterval = 10, authMaxRetries = 30}) {
        this.client = new MongoClient(dbUrl);
        this.collection = this.client.db(databaseName).collection(collectionName);
        this.authRetryInterval = authRetryInterval;
        this.authMaxRetries = authMaxRetries;
    }

    async generateUniqueCode(walletAddress) {
        const uniqueCode = uuidv4();

        try {
            await this.client.connect();
            await this.collection.updateOne({
                walletAddress
            }, {
                $set: { walletAddress, authCode: uniqueCode }
            }, {
                upsert: true
            });
            return uniqueCode;
        } catch (e) {
            throw new Error(`Failed to generate unique code: ${e.message}`);
        } finally {
            await this.client.close();
        }
    }

    async verifyAuthCode(walletAddress) {
        try {
            await this.client.connect();
            const document = await this.collection.findOne({
                walletAddress
            }, {
                projection: { _id: 0, authCode: 1 }
            })
            if (document === null) {
                throw new Error('No corresponding document found in database');
            }
            if (!document.authCode) {
                throw new Error('Document authCode invalid');
            }
            for (let i = 0; i < this.authMaxRetries; i++) {
                const authCodeFound = await isAuthCodeOnOpenseaBio(walletAddress, document.authCode);
                if (authCodeFound) {
                    return true;
                }
                await new Promise(resolve => setTimeout(resolve, this.authRetryInterval * 1000));
            }
            return false;
        } catch (e) {
            throw new Error(`Failed to verify auth code: ${e.message}`);
        } finally {
            await this.client.close();
        }
    }
}

module.exports = Web3SafeAuth;