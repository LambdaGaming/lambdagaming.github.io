
const images_city = [
	"https://steamuserimages-a.akamaihd.net/ugc/769485801082481852/D37CF429C62A1D3915D2D6755ABC90FC8F5B4B13/",
	"https://steamuserimages-a.akamaihd.net/ugc/769485801082481974/88A849F0873EDDE6FAF338F1DEED58E7F6B05FBD/",
	"https://steamuserimages-a.akamaihd.net/ugc/769485801082482074/8645EE1E47D96D4682CF1467985B0E16E1595B4E/",
	"https://steamuserimages-a.akamaihd.net/ugc/769485801082482209/B9B87C24CAED33FF66BC8DA5307477DCD186522D/",
	"https://steamuserimages-a.akamaihd.net/ugc/785248399681798998/015F8E8CCFE27023859C47D269A2933452160B04/",
	"https://steamuserimages-a.akamaihd.net/ugc/778491616151789829/C4FE896573081333BC3A9D648196BA4380F6BB14/",
	"https://steamuserimages-a.akamaihd.net/ugc/753718610866238713/0BBE7A96843A01B720A809106C72FEEED5725E76/",
	"https://steamuserimages-a.akamaihd.net/ugc/764972854685646320/C4D9AB8FF801930E1A9100B6019845F160D437E3/",
	"https://steamuserimages-a.akamaihd.net/ugc/776226452402868192/AE4462EA08A3B1BA6C8B9D629D4761E05BDAEBFF/",
	"https://steamuserimages-a.akamaihd.net/ugc/776226452402868277/EADAC8826CF5DFED71EC86786266891A9A0F9A44/",
	"https://steamuserimages-a.akamaihd.net/ugc/791983060737427489/A04FD1EC7C1E8848C345C61FBD84456C96E776F8/",
	"https://steamuserimages-a.akamaihd.net/ugc/791983060737423115/52AE6A060859E90736A23FA040547D8C45C881F0/",
	"https://steamuserimages-a.akamaihd.net/ugc/791983060737421801/69CA57D826B3DFF506C78EBAD876F19F91D4E739/",
	"https://steamuserimages-a.akamaihd.net/ugc/791982329721501510/66337B0E1F43D78BC8ECDFAB519DD82A7E39B553/",
	"https://steamuserimages-a.akamaihd.net/ugc/789731261729016688/587EDD82EF8ABCD6BF59CA15D70431A3A7A10408/",
	"https://steamuserimages-a.akamaihd.net/ugc/817877202144823421/FDBA17F91824F0016A644A270EB2A6F3874BCB92/",
	"https://steamuserimages-a.akamaihd.net/ugc/817877202144823172/3494388DF16699E7564F1DACD93F39F9EAA8E295/",
	"https://steamuserimages-a.akamaihd.net/ugc/954103393108547911/67EC4705FE0951ED37BC4CD685DEB4636EC003B1/",
	"https://steamuserimages-a.akamaihd.net/ugc/940592558493903129/2A627F68A0CF6FAE567EB629B0A2CDB9951C192B/",
	"https://steamuserimages-a.akamaihd.net/ugc/939466413434134874/A071F69289CF9CD03534081A28F3DE76F612CF7D/",
	"https://steamuserimages-a.akamaihd.net/ugc/956353893725227621/4BC81F77CCB4A4CB122FB76D928378BB4428ACAA/",
	"https://steamuserimages-a.akamaihd.net/ugc/941716871895633338/4AFD43FD11EA5D02D1499354DF5F061CE6492ECF/",
	"https://steamuserimages-a.akamaihd.net/ugc/939456827644408291/E3B7C6E1F4CAA878ABB1008861D91541D314E00D/",
	"https://steamuserimages-a.akamaihd.net/ugc/951835098542290982/9A4741511C3A8AB3408665B9FB272C9502CC1BC1/",
	"https://steamuserimages-a.akamaihd.net/ugc/960842269461510070/0A9FEE79110634BECE88C967B629A6640D1C4D3E/",
	"https://steamuserimages-a.akamaihd.net/ugc/960842269461509476/A783BFCAE7C50BAB0D121745DCCC0E6BB9937245/",
	"https://steamuserimages-a.akamaihd.net/ugc/951835098534686924/9942CABB1F55C49AD8779D457F57E1457D09E955/",
	"https://steamuserimages-a.akamaihd.net/ugc/973226453027954066/596E1A384CFFA725CA6D3316392F1E8BBD06A004/",
	"https://steamuserimages-a.akamaihd.net/ugc/924812134238652174/A3E7344C4C9B9218185748E9333D7E93DF08D2CD/",
	"https://steamuserimages-a.akamaihd.net/ugc/924812134238652385/5B879F6010A6A5FEB0579A2E5DB8B75696CBE008/",
	"https://steamuserimages-a.akamaihd.net/ugc/945077538408272590/EA3C3AAB667DE468603CA1780687590162B310B5/",
	"https://steamuserimages-a.akamaihd.net/ugc/912423900260570744/0417F67AC56A5F70804EF6330C5476F1C4F00992/",
	"https://steamuserimages-a.akamaihd.net/ugc/912423523921889070/1FA4F68AB54CB87C7A13C61914B7036AE9686FCA/",
	"https://steamuserimages-a.akamaihd.net/ugc/912423178598004008/65C11552B48F71ECDE2EA320D7C8DE27EE30DF9D/",
	"https://steamuserimages-a.akamaihd.net/ugc/913546638435055634/0B95F20FAD6141F0A95CE5678DA90C65B8DB306B/",
	"https://steamuserimages-a.akamaihd.net/ugc/913545881656534818/99FD9926523D478453A2C9DA7B1F040C53A699CF/",
	"https://steamuserimages-a.akamaihd.net/ugc/2422250057107899524/B93618ACAAB4E9093177916F72EB8BF077C5CD75/",
	"https://steamuserimages-a.akamaihd.net/ugc/916919517444062629/74A8A67259E6B5289D634AF925AF8694EFDFB63D/",
	"https://steamuserimages-a.akamaihd.net/ugc/914666100556159025/F5498F8252F1A2D73C88FDC92E4C82F58F802D48/",
	"https://steamuserimages-a.akamaihd.net/ugc/921419892341663383/5375979B884B24385696AC87FFFCE71C37D6BD0B/",
	"https://steamuserimages-a.akamaihd.net/ugc/921419479883596715/DC4C578FFA1A3A490F2703A7B071F93FEFA969C5/",
	"https://steamuserimages-a.akamaihd.net/ugc/909031094403576548/750EC37605E17B25B6386992EA03FE8EDA6E244E/",
	"https://steamuserimages-a.akamaihd.net/ugc/873000516827233744/76DBF8EAE01E2505CACECFEB409F350C35A1815A/",
	"https://steamuserimages-a.akamaihd.net/ugc/865118579588089151/06FCFC9AD1C7C39396B36E44AD4F180F72668245/",
	"https://steamuserimages-a.akamaihd.net/ugc/865118579588090920/CA4C4521A714BFAF11549F68806CD2470DF24DF1/",
	"https://steamuserimages-a.akamaihd.net/ugc/862865832405014906/704068EF4BEEBD183ABDF2B034CA3649D348507F/",
	"https://steamuserimages-a.akamaihd.net/ugc/859487401568206818/EB7DBA2F1BBD5AC635BF4AED08A02840B119DE13/",
	"https://steamuserimages-a.akamaihd.net/ugc/84847123374189406/1823CEEB43F0689AA7B19C0D2254744822EF2BAA/",
	"https://steamuserimages-a.akamaihd.net/ugc/803174280545812074/BB1C075E84620A391CE5D3F199EE32A69818DC99/",
	"https://steamuserimages-a.akamaihd.net/ugc/92725318255055139/5BB90327D45DFDE32046ABC6055F3BC487F9BB3C/",
	"https://steamuserimages-a.akamaihd.net/ugc/92725562085074513/DF817FA421F7D94B2EDC54A7C3420474085D9AA3/",
	"https://steamuserimages-a.akamaihd.net/ugc/261591224032181447/C214C0D72FEAC320B41A21C4379534E3359DEAEC/",
	"https://steamuserimages-a.akamaihd.net/ugc/83717558767288751/15555828A9011D360D3C437E423811F472E9345E/",
	"https://steamuserimages-a.akamaihd.net/ugc/83721257584337818/9A3EE5F132F33335FA805327BB826DCB1F342095/",
	"https://steamuserimages-a.akamaihd.net/ugc/83721257584338000/E497F538BB4F57843B8F5CA33AB921456BE1BCF1/",
	"https://steamuserimages-a.akamaihd.net/ugc/802048386395353957/AA36026583206DFA074463CCCC0213EE684D0B11/",
	"https://steamuserimages-a.akamaihd.net/ugc/862851459015989961/78FA34CF4658BECFD2F2D4ADDEA7FD46CFB47A47/",
	"https://steamuserimages-a.akamaihd.net/ugc/862851664214991720/EEF1228F30123FF5D5FF73CE1E94167A84419224/",
	"https://steamuserimages-a.akamaihd.net/ugc/859487401564128034/5FDFE4FDEC4F90F86750AA96580A7846AD05277F/",
	"https://steamuserimages-a.akamaihd.net/ugc/859487401564129035/1F2335EAC643017C370CA3B68E0326CCDAAEED88/",
	"https://steamuserimages-a.akamaihd.net/ugc/849342978140859219/61BA931D691015FDA0963398BA0FE2D744A3E8BC/",
	"https://steamuserimages-a.akamaihd.net/ugc/862851664214991591/3E1E2CE18E486C951966B49DEC0733C2F0426EAE/",
	"https://steamuserimages-a.akamaihd.net/ugc/785163209659138340/5C01F33FA70049CDDEC79D89C7305921A4FF022B/",
	"https://steamuserimages-a.akamaihd.net/ugc/83717558767288524/2D85EF8372820A292B6BBC6E5AC22D78240F860B/",
	"https://steamuserimages-a.akamaihd.net/ugc/83719357780777287/2A381BE1708670A5963C778F321B4F126C3F8C35/",
	"https://steamuserimages-a.akamaihd.net/ugc/83717093933822483/258EDC073B509960C872AFF124F36D9A8B4F0BE2/",
	"https://steamuserimages-a.akamaihd.net/ugc/91596491021852768/4B3CC0C9070E0BF8D0E042795774663FD8CC4742/",
	"https://steamuserimages-a.akamaihd.net/ugc/99473989844236637/050D5C59CFE6028902F225D0A61F9193D610E6B6/",
	"https://steamuserimages-a.akamaihd.net/ugc/771742963099070752/964F495F013533EEF28A9202D985F9E4AE1F1E19/",
	"https://steamuserimages-a.akamaihd.net/ugc/771742963099070866/C073AA5DC0F46B7F6514863EF327E3F0A8813C96/",
	"https://steamuserimages-a.akamaihd.net/ugc/787505864794215283/A965969AD5A160148439BC49BF84A6FBC6F7A368/",
	"https://steamuserimages-a.akamaihd.net/ugc/772870312904522026/5A1C0372C0179F769B821719EEB0618E1369A8BC/",
	"https://steamuserimages-a.akamaihd.net/ugc/1322320380553935954/DD224489F6578338933120C3330CF06C466D496B/",
	"https://steamuserimages-a.akamaihd.net/ugc/1458554772680445154/8B5EABE8A2F638524BF6DFF57923672E60B62B73/",
	"https://steamuserimages-a.akamaihd.net/ugc/1458554772684842220/979D10D270E45C24F316947CFEDE45553A42AD90/",
	"https://steamuserimages-a.akamaihd.net/ugc/1645461720877768351/3E0E59C5331184A357F5F420A28A858A78CA84F3/",
	"https://steamuserimages-a.akamaihd.net/ugc/1654473373993632268/4282D685580C0DD34B939E364981E6583AEF16E9/",
	"https://steamuserimages-a.akamaihd.net/ugc/1646592361163473752/D4DE086DD5C1E5B76EF65EBA3C88AE0EB435C35E/",
	"https://steamuserimages-a.akamaihd.net/ugc/1646592361163473841/CE4CD88E3EEC9BF52480AFB0CCAD022E4CAEFAF4/",
	"https://steamuserimages-a.akamaihd.net/ugc/1646592361163473917/07399FC4DFBF1FBB1EF1E142C23DEF9E61D2614E/",
	"https://steamuserimages-a.akamaihd.net/ugc/1646593139258090352/3579A245655F4C6CF8A1096983DCD1AD9624E654/",
	"https://steamuserimages-a.akamaihd.net/ugc/1654474664004957809/D38B1188C9DB370EC42F3F88F0BCD5225CFADD57/"
]

const images_hlu = [
	"https://steamuserimages-a.akamaihd.net/ugc/771734716154727747/E820AA8445C0C4764136A255A2196F8DD87A78B8/",
	"https://steamuserimages-a.akamaihd.net/ugc/764972776948386370/96C415341071281879EE1E4D0E97039AEDE17981/",
	"https://steamuserimages-a.akamaihd.net/ugc/780735375642091327/00447523D39158A05078B8FC3BC65860434E9E64/",
	"https://steamuserimages-a.akamaihd.net/ugc/764972776948386551/05A61E81DA24293157F42B3A46B9AD210DAD1D57/",
	"https://steamuserimages-a.akamaihd.net/ugc/764972776948386632/C93BCDDE3C37160FB6DCC8FF35AFECCA21868D8E/",
	"https://steamuserimages-a.akamaihd.net/ugc/773979976201042513/A792061CBD132B5F93667E3B159B686B78F525FB/",
	"https://steamuserimages-a.akamaihd.net/ugc/946206517767979014/54D91BBD3CB2C96D612761F1C414B6C9ABA52C7C/",
	"https://steamuserimages-a.akamaihd.net/ugc/921418404946992190/CB17B41C2634C60782DF52DA25D178964B6AB51A/",
	"https://steamuserimages-a.akamaihd.net/ugc/921418404946992280/884BE8F2B74086E7F5E3A9FB18FF977F7203D8E9/",
	"https://steamuserimages-a.akamaihd.net/ugc/921417946950663293/C3AF49C1427637F6BD8E42CAFD23F579B7C23C2F/",
	"https://steamuserimages-a.akamaihd.net/ugc/921417946945344182/5A0204607DF68DDB112C4EA2E1FD4C0919828CB8/",
	"https://steamuserimages-a.akamaihd.net/ugc/906780084513351827/69E5C9235D98A3888D6B76400F4239AB43EA67CE/",
	"https://steamuserimages-a.akamaihd.net/ugc/843716236764304571/6FEEE4953F727405536924A60F9A10ACED220375/",
	"https://steamuserimages-a.akamaihd.net/ugc/92725562091688709/69301DB67AB71ABC017F5BE6C8F88443C167C536/",
	"https://steamuserimages-a.akamaihd.net/ugc/92730090860058067/7C1BE85A4B5BEDAC8418828076C3EBFE919DED1A/",
	"https://steamuserimages-a.akamaihd.net/ugc/859487401564119897/7AC1D7434E43A11737ED766B7AC429740D4DA0CB/",
	"https://steamuserimages-a.akamaihd.net/ugc/859487401564129573/FBB0B518DAA1E812E6A53BB126828CBB712A54B9/",
	"https://steamuserimages-a.akamaihd.net/ugc/862856504895065597/05A333614ECBA0DA66B3539F90FC037563AA9A1A/",
	"https://steamuserimages-a.akamaihd.net/ugc/862852702977775347/79B5FAA1AA31346CE631366B4CFEECDF190A08A4/",
	"https://steamuserimages-a.akamaihd.net/ugc/868487510164320053/72624C4143852CA9CA9C8B21B2C66F0F2AA6A089/",
	"https://steamuserimages-a.akamaihd.net/ugc/1654473373993645048/4D3D063F59EF387AD10B177AD92DBA6E2F7BEFE1/"
]

const images_various = [
	"../graphics/various_screenshot1.png",
	"https://steamuserimages-a.akamaihd.net/ugc/769484415898218454/BD52DB1BF4ECFF82522F7579799DF1461F4129BE/",
	"https://steamuserimages-a.akamaihd.net/ugc/92724928148075182/1D2AC5CF6871D9D11B6E6EFEF5155E2298648CD8/"
]

const images_sandbox = [
	"https://steamuserimages-a.akamaihd.net/ugc/771742638359780528/FBB2FC078CF6BAA5D1B2B5E9BE771082B1BC8D7D/",
	"https://steamuserimages-a.akamaihd.net/ugc/948464026890128408/0A77BED3F6658DD4F3FDCD0725ADCAF808DF829E/",
	"https://steamuserimages-a.akamaihd.net/ugc/784120056410448454/A91EDC84F2B6EDEEF391820F2DFD76F5965455FC/",
	"https://steamuserimages-a.akamaihd.net/ugc/766100671604420906/07A417440D8A743F4498A4023D5EE3BB4F8E7E5B/",
	"https://steamuserimages-a.akamaihd.net/ugc/766100671604420815/4053644D27F7436645D08C2EFD1AA140291950C9/",
	"https://steamuserimages-a.akamaihd.net/ugc/766100671604420740/0B5B0F138A81DEB1838C7C95DCE987AF51B489F3/",
	"https://steamuserimages-a.akamaihd.net/ugc/766100671604420645/0BF7A6F643D869F177FC9F055027EBEBD42DB947/",
	"https://steamuserimages-a.akamaihd.net/ugc/766100671604420458/CA72437E72566873BBF9DA5975A6CD3CAA540A8D/",
	"https://steamuserimages-a.akamaihd.net/ugc/781863270290773796/545D479E0CA1A21A406B41E7A8719436330029E0/",
	"https://steamuserimages-a.akamaihd.net/ugc/781863270290772521/546E403A4A80F77315165557848A7C2B6B4206A5/",
	"https://steamuserimages-a.akamaihd.net/ugc/965354846166824265/E35EE8292636B718E75DB68DF82B43378B327C95/",
	"https://steamuserimages-a.akamaihd.net/ugc/936079456759225921/877F23FADE60BC53F3C7100AF0967CE929FB3A96/"
]

function WriteImage() {
	switch ( imageid ) {
		case 1:
			images = images_city
			break
		case 2:
			images = images_hlu
			break
		case 3:
			images = images_various
			break
		case 4:
			images = images_sandbox
			break
	}
	var image = document.getElementById( "image" )
	var initimage = Math.floor( Math.random() * images.length ) // Initialize the image with a random one so the page isn't blank for 3 seconds
	image.src = images[initimage]
	function RandomImage() {
		var randimage = Math.floor( Math.random() * images.length )
		image.src = images[randimage] // Set image to a random one from the list
	}
	setInterval( RandomImage, 3000 ) // 3 second timer loop
}