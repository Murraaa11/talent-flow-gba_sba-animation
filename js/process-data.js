
function processData(csv, country, chinese) {

  // prettier-ignore
  const abbrById = 
  {'004': 'AFG',
  '248': 'ALA',
  '008': 'ALB',
  '012': 'DZA',
  '016': 'ASM',
  '020': 'AND',
  '024': 'AGO',
  '660': 'AIA',
  '010': 'ATA',
  '028': 'ATG',
  '032': 'ARG',
  '051': 'ARM',
  '533': 'ABW',
  '036': 'AUS',
  '040': 'AUT',
  '031': 'AZE',
  '044': 'BHS',
  '048': 'BHR',
  '050': 'BGD',
  '052': 'BRB',
  '112': 'BLR',
  '056': 'BEL',
  '084': 'BLZ',
  '204': 'BEN',
  '060': 'BMU',
  '064': 'BTN',
  '068': 'BOL',
  '535': 'BES',
  '070': 'BIH',
  '072': 'BWA',
  '074': 'BVT',
  '076': 'BRA',
  '086': 'IOT',
  '096': 'BRN',
  '100': 'BGR',
  '854': 'BFA',
  '108': 'BDI',
  '132': 'CPV',
  '116': 'KHM',
  '120': 'CMR',
  '124': 'CAN',
  '136': 'CYM',
  '140': 'CAF',
  '148': 'TCD',
  '152': 'CHL',
  '156': 'CHN',
  '162': 'CXR',
  '166': 'CCK',
  '170': 'COL',
  '174': 'COM',
  '178': 'COG',
  '180': 'COD',
  '184': 'COK',
  '188': 'CRI',
  '384': 'CIV',
  '191': 'HRV',
  '192': 'CUB',
  '531': 'CUW',
  '196': 'CYP',
  '203': 'CZE',
  '208': 'DNK',
  '262': 'DJI',
  '212': 'DMA',
  '214': 'DOM',
  '218': 'ECU',
  '818': 'EGY',
  '222': 'SLV',
  '226': 'GNQ',
  '232': 'ERI',
  '233': 'EST',
  '748': 'SWZ',
  '231': 'ETH',
  '238': 'FLK',
  '234': 'FRO',
  '242': 'FJI',
  '246': 'FIN',
  '250': 'FRA',
  '254': 'GUF',
  '258': 'PYF',
  '260': 'ATF',
  '266': 'GAB',
  '270': 'GMB',
  '268': 'GEO',
  '276': 'DEU',
  '288': 'GHA',
  '292': 'GIB',
  '300': 'GRC',
  '304': 'GRL',
  '308': 'GRD',
  '312': 'GLP',
  '316': 'GUM',
  '320': 'GTM',
  '831': 'GGY',
  '324': 'GIN',
  '624': 'GNB',
  '328': 'GUY',
  '332': 'HTI',
  '334': 'HMD',
  '336': 'VAT',
  '340': 'HND',
  '344': 'HKG',
  '348': 'HUN',
  '352': 'ISL',
  '356': 'IND',
  '360': 'IDN',
  '364': 'IRN',
  '368': 'IRQ',
  '372': 'IRL',
  '833': 'IMN',
  '376': 'ISR',
  '380': 'ITA',
  '388': 'JAM',
  '392': 'JPN',
  '832': 'JEY',
  '400': 'JOR',
  '398': 'KAZ',
  '404': 'KEN',
  '296': 'KIR',
  '408': 'PRK',
  '410': 'KOR',
  '414': 'KWT',
  '417': 'KGZ',
  '418': 'LAO',
  '428': 'LVA',
  '422': 'LBN',
  '426': 'LSO',
  '430': 'LBR',
  '434': 'LBY',
  '438': 'LIE',
  '440': 'LTU',
  '442': 'LUX',
  '446': 'MAC',
  '450': 'MDG',
  '454': 'MWI',
  '458': 'MYS',
  '462': 'MDV',
  '466': 'MLI',
  '470': 'MLT',
  '584': 'MHL',
  '474': 'MTQ',
  '478': 'MRT',
  '480': 'MUS',
  '175': 'MYT',
  '484': 'MEX',
  '583': 'FSM',
  '498': 'MDA',
  '492': 'MCO',
  '496': 'MNG',
  '499': 'MNE',
  '500': 'MSR',
  '504': 'MAR',
  '508': 'MOZ',
  '104': 'MMR',
  '516': 'NAM',
  '520': 'NRU',
  '524': 'NPL',
  '528': 'NLD',
  '540': 'NCL',
  '554': 'NZL',
  '558': 'NIC',
  '562': 'NER',
  '566': 'NGA',
  '570': 'NIU',
  '574': 'NFK',
  '807': 'MKD',
  '580': 'MNP',
  '578': 'NOR',
  '512': 'OMN',
  '586': 'PAK',
  '585': 'PLW',
  '275': 'PSE',
  '591': 'PAN',
  '598': 'PNG',
  '600': 'PRY',
  '604': 'PER',
  '608': 'PHL',
  '612': 'PCN',
  '616': 'POL',
  '620': 'PRT',
  '630': 'PRI',
  '634': 'QAT',
  '638': 'REU',
  '642': 'ROU',
  '643': 'RUS',
  '646': 'RWA',
  '652': 'BLM',
  '654': 'SHN',
  '659': 'KNA',
  '662': 'LCA',
  '663': 'MAF',
  '666': 'SPM',
  '670': 'VCT',
  '882': 'WSM',
  '674': 'SMR',
  '678': 'STP',
  '682': 'SAU',
  '686': 'SEN',
  '688': 'SRB',
  '690': 'SYC',
  '694': 'SLE',
  '702': 'SGP',
  '534': 'SXM',
  '703': 'SVK',
  '705': 'SVN',
  '090': 'SLB',
  '706': 'SOM',
  '710': 'ZAF',
  '239': 'SGS',
  '728': 'SSD',
  '724': 'ESP',
  '144': 'LKA',
  '729': 'SDN',
  '740': 'SUR',
  '744': 'SJM',
  '752': 'SWE',
  '756': 'CHE',
  '760': 'SYR',
  '158': 'TWN',
  '762': 'TJK',
  '834': 'TZA',
  '764': 'THA',
  '626': 'TLS',
  '768': 'TGO',
  '772': 'TKL',
  '776': 'TON',
  '780': 'TTO',
  '788': 'TUN',
  '792': 'TUR',
  '795': 'TKM',
  '796': 'TCA',
  '798': 'TUV',
  '800': 'UGA',
  '804': 'UKR',
  '784': 'ARE',
  '826': 'GBR',
  '840': 'USA',
  '581': 'UMI',
  '858': 'URY',
  '860': 'UZB',
  '548': 'VUT',
  '862': 'VEN',
  '704': 'VNM',
  '092': 'VGB',
  '850': 'VIR',
  '876': 'WLF',
  '732': 'ESH',
  '887': 'YEM',
  '894': 'ZMB',
  '716': 'ZWE',
  '999': 'GBA',
  '998': 'SBA',
}



  // filter undefined country id
  country.objects.countries.geometries = country.objects.countries.geometries.filter((d)=>{
    return Object.hasOwnProperty.call(d,'id');
  });

  country.objects.countries.geometries.forEach(
    (d) => (d.properties.abbr = abbrById[d.id])
  );

  const idByName = Object.fromEntries(
    Object.entries(abbrById).map(([key, value]) => [value, key])
  );

  const abbrToChineseName = new Map(
    chinese.map((d) => [d.alpha3, d.ChineseName])
  );


  country.objects.countries.geometries.forEach(
    (d) => (d.properties.chinese_name = abbrToChineseName.get(d.properties.abbr))
  );
  
  const links = []; //array of object storing Source (id), Target (id) and Value (int)

  csv.forEach((d) => {
    const sourceId = idByName[d.source_ISO];
    const targetId = idByName[d.target_ISO];

    // check if sourceId and targetId both exist
    if (sourceId !== undefined && targetId !== undefined) {
        links.push({
            source: sourceId,
            target: targetId,
            value: +d.value,
        });
    }
  });

  const inbounds = d3.group(links, (d) => d.target);
  const outbounds = d3.group(links, (d) => d.source);

  const original_nodes = country.objects.countries.geometries.map((d) => {
    const name = d.properties.name === "China" ? "Mainland China" : d.properties.name;
    const id = d.id;
    const chinese_name = d.properties.chinese_name;
    return {
      name,
      id,
      chinese_name,
      inbounds: inbounds.get(id) ? inbounds.get(id).sort((a, b) => d3.descending(a.value, b.value)) : [],
      inboundsTotal: inbounds.get(id) ? d3.sum(inbounds.get(id), (d) => d.value) : 0,
      outbounds: outbounds.get(id) ? outbounds.get(id).sort((a, b) => d3.descending(a.value, b.value)) : [],
      outboundsTotal: outbounds.get(id) ? d3.sum(outbounds.get(id), (d) => d.value) : 0,
    };

  })

  // //按中文排序
  // const collator = new Intl.Collator('zh-CN', { sensitivity: 'base' });
  // const nodes = [...original_nodes].sort((a, b) => collator.compare(a.chinese_name, b.chinese_name));

  const nodes = [...original_nodes].sort((a, b) => d3.ascending(a.name, b.name));

  //console.log(links);

  return { nodes, links };
}
