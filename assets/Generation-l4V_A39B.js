import{_ as O,r,o as H,e as T,w as l,d as e,b as n,a as d}from"./index-mBKc66Be.js";const B={data(){return{tabPosition:"left",activeTab:"tab1",text:"",subText:null,result:"",form3:{fnameInput:"main_qm9.py",genCon:"",oneHot:!0,mnameInput:"graph_attention_transformer_nonlinear_l2",learningRate:5e-4,minlr:1e-6,batch_size:128,radius:5,basis:128,weightDecay:.005},form2:{fnameInput:"train.py",genCon:"",shuffle:!0,batch_size:32,alpha:.1,beta:0,maxbeta:.01,stepBeta:.002,latentDimension:56,learningRate:.001,n_epochs:6,gradClip:10},form1:{genCon:"",fnameInput:"main_qm9.py",mnameInput:"egnn_dynamics",learningRate:1e-4,numberofFeature:192,n_layers:9,diffusionSteps:1e3,saveModel:!0,n_epochs:3e3,n_stability_samples:1e3,batch_size:64,diffusion_noise_precision:1e-5}}},watch:{activeTab(){this.updateResult()},"form2.fnameInput"(){this.updateResult()},"form2.genCon"(){this.updateResult()},"form2.shuffle"(){this.updateResult()},"form2.batch_size"(){this.updateResult()},"form2.alpha"(){this.updateResult()},"form2.beta"(){this.updateResult()},"form2.maxbeta"(){this.updateResult()},"form2.stepBeta"(){this.updateResult()},"form2.latentDimension"(){this.updateResult()},"form2.learningRate"(){this.updateResult()},"form2.n_epochs"(){this.updateResult()},"form2.gradClip"(){this.updateResult()},"form1.batch_size"(){this.updateResult()},"form1.diffusion_noise_precision"(){this.updateResult()},"form1.n_epochs"(){this.updateResult()},"form1.n_stability_samples"(){this.updateResult()},"form1.genCon"(){this.updateResult()},"form1.fnameInput"(){this.updateResult()},"form1.mnameInput"(){this.updateResult()},"form1.learningRate"(){this.updateResult()},"form1.numberofFeature"(){this.updateResult()},"form1.n_layers"(){this.updateResult()},"form1.diffusionSteps"(){this.updateResult()},"form1.saveModel"(){this.updateResult()},"form3.fnameInput"(){this.updateResult()},"form3.genCon"(){this.updateResult()},"form3.oneHot"(){this.updateResult()},"form3.mnameInput"(){this.updateResult()},"form3.learningRate"(){this.updateResult()},"form3.minlr"(){this.updateResult()},"form3.batch_size"(){this.updateResult()},"form3.radius"(){this.updateResult()},"form3.basis"(){this.updateResult()},"form3.weightDecay"(){this.updateResult()}},computed:{},methods:{copyToClipboard(){const _=document.createElement("textarea");_.value=this.result,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),console.log("已复制到剪贴板")},updateResult(){this.activeTab==="tab1"?(this.result="",this.form1.genCon==="General"?this.result="python "+this.form1.fnameInput+" --exp_name edm_qm9 --model "+this.form1.mnameInput+" --lr "+this.form1.learningRate+" --nf "+this.form1.numberofFeature+" --n_layers "+this.form1.n_layers+" --diffusion_steps "+this.form1.diffusionSteps+" --save_model "+this.form1.saveModel+" --batch_size "+this.form1.batch_size+" --diffusion_noise_precision "+this.form1.diffusion_noise_precision+" --diffusion_noise_schedule polynomial_2 --diffusion_loss_type l2 --normalize_factors [1,4,10] --test_epochs 20 --ema_decay 0.9999":this.form1.genCon!==""&&(this.result="python "+this.form1.fnameInput+" --exp_name exp_cond_"+this.form1.genCon+" --model "+this.form1.mnameInput+" --lr "+this.form1.learningRate+" --nf "+this.form1.numberofFeature+" --n_layers "+this.form1.n_layers+" --diffusion_steps "+this.form1.diffusionSteps+" --save_model "+this.form1.saveModel+" --batch_size "+this.form1.batch_size+" --diffusion_noise_precision "+this.form1.diffusion_noise_precision+" --conditioning "+this.form1.genCon+" --sin_embedding False --diffusion_noise_schedule polynomial_2 --dequantization deterministic --include_charges False --diffusion_loss_type l2 --normalize_factors [1,8,1] --dataset qm9_second_half")):this.activeTab==="tab2"?(this.result="",this.form2.genCon!==""&&(this.result="",this.result="python "+this.form2.fnameInput+" --train_set ../data/qm9/train.txt --valid_set ../data/qm9/valid.txt",this.result=this.result+" --test_set ../data/qm9/test.txt --vocab ../ckpts/qm9/prop_opt/qm9_bpe_300.txt",this.result=this.result+" --batch_size "+this.form2.batch_size,this.form2.shuffle===!0&&(this.result=this.result+" --shuffle"),this.result=this.result+" --alpha "+this.form2.alpha+" --beta"+this.form2.beta,this.result=this.result+" --max_beta"+this.form2.maxbeta+" --step_beta "+this.form2.stepBeta,this.result=this.result+" --kl_anneal_iter 1000 --kl_warmup 0 --lr "+this.form2.learningRate,this.result=this.result+" --save_dir qm9_exps/ckpt/myQM9 --grad_clip "+this.form2.gradClip,this.result=this.result+" --epochs "+this.form2.n_epochs+" --gpus 0 --props "+this.form2.genCon,this.result=this.result+" --latent_dim "+this.form2.latentDimension+" --node_hidden_dim 300",this.result=this.result+" --graph_embedding_dim 400 --patience 3")):this.activeTab==="tab3"?(this.result="",this.form3.genCon!==""&&(this.result="",this.result="python "+this.form3.fnameInput,this.result=this.result+" --output-dir 'models/qm9/equiformer/"+this.form3.genCon+"/' ",this.result=this.result+"--model-name '"+this.form3.mnameInput+"' ",this.result=this.result+" --input-irreps '5x0e' --target "+this.form3.genCon,this.result=this.result+" --data-path 'datasets/qm9' --batch_size "+this.form3.batch_size,this.result=this.result+" --radius "+this.form3.radius,this.result=this.result+" --num-basis "+this.form3.basis,this.result=this.result+" --drop-path 0.0 --weight-decay "+this.form3.weightDecay,this.result=this.result+" --lr "+this.form3.learningRate,this.result=this.result+" --min-lr "+this.form3.minlr,this.result=this.result+" --no-model-ema --no-amp",this.form3.oneHot===!0?this.result=this.result+" --feature-type 'one_hot'":this.result=this.result+" --feature-type 'original'")):this.result="Not available"},getSerach(){this.subText=this.text,this.subText.toLowerCase().includes("dataset")?this.$router.push({name:"Dataset"}):this.subText.toLowerCase().includes("generation")?this.$router.push({name:"Generation"}):this.subText.toLowerCase().includes("leaderboard")?this.$router.push({name:"Leaderboard"}):this.subText.toLowerCase().includes("home")?this.$router.push({name:"Home"}):window.location.href="https://www.google.com"}}},q=d("span",{slot:"title"},"Home",-1),k=d("span",{slot:"title"},"Dataset",-1),F=d("span",{slot:"title"},"Generation",-1),G=d("span",{slot:"title"},"Leaderboard",-1),S=d("sub",null,"ε",-1),N=d("sub",null,"HOMO",-1),E=d("sub",null,"LUMO",-1),Q=d("sub",null,"v",-1),A=d("sub",null,"ε",-1),Z=d("sub",null,"HOMO",-1),W=d("sub",null,"LUMO",-1),j=d("sub",null,"v",-1),J=d("sub",null,"ε",-1),K=d("sub",null,"HOMO",-1),X=d("sub",null,"LUMO",-1),Y=d("sub",null,"v",-1);function $(_,o,ee,le,t,y){const C=r("HomeFilled"),h=r("el-icon"),b=r("el-menu-item"),U=r("DataAnalysis"),P=r("Opportunity"),w=r("TrendCharts"),I=r("el-menu"),z=r("el-aside"),p=r("el-input"),a=r("el-col"),R=r("el-button"),m=r("el-row"),M=r("el-header"),i=r("el-option"),V=r("el-select"),u=r("el-form-item"),c=r("el-switch"),f=r("el-input-number"),g=r("el-form"),v=r("el-tab-pane"),D=r("el-tabs"),L=r("el-main"),x=r("el-container");return H(),T(x,null,{default:l(()=>[e(z,{width:"200px"},{default:l(()=>[e(I,{"default-active":this.$route.path,router:""},{default:l(()=>[e(b,{key:"Home",index:"/Home"},{default:l(()=>[e(h,null,{default:l(()=>[e(C)]),_:1}),q]),_:1}),e(b,{key:"Dataset",index:"/Dataset"},{default:l(()=>[e(h,null,{default:l(()=>[e(U)]),_:1}),k]),_:1}),e(b,{key:"Generation",index:"/Generation"},{default:l(()=>[e(h,null,{default:l(()=>[e(P)]),_:1}),F]),_:1}),e(b,{key:"Leaderboard",index:"/Leaderboard"},{default:l(()=>[e(h,null,{default:l(()=>[e(w)]),_:1}),G]),_:1})]),_:1},8,["default-active"])]),_:1}),e(x,null,{default:l(()=>[e(M,null,{default:l(()=>[e(m,{gutter:20},{default:l(()=>[e(a,{span:6,offset:15},{default:l(()=>[e(p,{type:"text",placeholder:"Please enter your search",modelValue:t.text,"onUpdate:modelValue":o[0]||(o[0]=s=>t.text=s),maxlength:"15","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(a,{span:2},{default:l(()=>[e(R,{type:"primary",icon:"search",onClick:y.getSerach},{default:l(()=>[n("Search")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),e(L,null,{default:l(()=>[e(D,{modelValue:t.activeTab,"onUpdate:modelValue":o[35]||(o[35]=s=>t.activeTab=s),"tab-position":t.tabPosition},{default:l(()=>[e(v,{label:"EDM Base",name:"tab1"},{default:l(()=>[e(g,{ref:"form1","label-width":"200px",style:{height:"400 px"}},{default:l(()=>[e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Condition for Generation:"},{default:l(()=>[e(V,{modelValue:t.form1.genCon,"onUpdate:modelValue":o[1]||(o[1]=s=>t.form1.genCon=s),placeholder:"Please select"},{default:l(()=>[e(i,{label:"General",value:"General"}),e(i,{value:"alpha"},{default:l(()=>[n("α")]),_:1}),e(i,{value:"delta"},{default:l(()=>[n("Δ"),S]),_:1}),e(i,{value:"HOMO"},{default:l(()=>[n("ε"),N]),_:1}),e(i,{value:"LUMO"},{default:l(()=>[n("ε"),E]),_:1}),e(i,{value:"mu"},{default:l(()=>[n("μ")]),_:1}),e(i,{value:"cv"},{default:l(()=>[n("C"),Q]),_:1}),e(i,{value:"QED"},{default:l(()=>[n("QED")]),_:1}),e(i,{value:"LogP"},{default:l(()=>[n("Log P")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(c,{modelValue:t.form1.saveModel,"onUpdate:modelValue":o[2]||(o[2]=s=>t.form1.saveModel=s),"active-text":"Save model","inactive-text":"Not save"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"File name for main function:"},{default:l(()=>[e(p,{modelValue:t.form1.fnameInput,"onUpdate:modelValue":o[3]||(o[3]=s=>t.form1.fnameInput=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Model name:"},{default:l(()=>[e(p,{modelValue:t.form1.mnameInput,"onUpdate:modelValue":o[4]||(o[4]=s=>t.form1.mnameInput=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Learning rate:"},{default:l(()=>[e(f,{modelValue:t.form1.learningRate,"onUpdate:modelValue":o[5]||(o[5]=s=>t.form1.learningRate=s),placeholder:"Please input",step:1e-4},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Number of Feature:"},{default:l(()=>[e(f,{modelValue:t.form1.numberofFeature,"onUpdate:modelValue":o[6]||(o[6]=s=>t.form1.numberofFeature=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Number of layers:"},{default:l(()=>[e(f,{modelValue:t.form1.n_layers,"onUpdate:modelValue":o[7]||(o[7]=s=>t.form1.n_layers=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Diffusion steps:"},{default:l(()=>[e(f,{modelValue:t.form1.diffusionSteps,"onUpdate:modelValue":o[8]||(o[8]=s=>t.form1.diffusionSteps=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Number of epochs:"},{default:l(()=>[e(f,{modelValue:t.form1.n_epochs,"onUpdate:modelValue":o[9]||(o[9]=s=>t.form1.n_epochs=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Number of stability samples:"},{default:l(()=>[e(f,{modelValue:t.form1.n_stability_samples,"onUpdate:modelValue":o[10]||(o[10]=s=>t.form1.n_stability_samples=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Batch size:"},{default:l(()=>[e(f,{modelValue:t.form1.batch_size,"onUpdate:modelValue":o[11]||(o[11]=s=>t.form1.batch_size=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Diffusion noise precision:"},{default:l(()=>[e(f,{modelValue:t.form1.diffusion_noise_precision,"onUpdate:modelValue":o[12]||(o[12]=s=>t.form1.diffusion_noise_precision=s),placeholder:"Please input",step:1e-5},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1}),e(v,{label:"PS-VAE Base",name:"tab2"},{default:l(()=>[e(g,{ref:"form2","label-width":"200px"},{default:l(()=>[e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"File name for main function:"},{default:l(()=>[e(p,{modelValue:t.form2.fnameInput,"onUpdate:modelValue":o[13]||(o[13]=s=>t.form2.fnameInput=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Condition for Generation:"},{default:l(()=>[e(V,{modelValue:t.form2.genCon,"onUpdate:modelValue":o[14]||(o[14]=s=>t.form2.genCon=s),placeholder:"Please select"},{default:l(()=>[e(i,{value:"alpha"},{default:l(()=>[n("α")]),_:1}),e(i,{value:"delta"},{default:l(()=>[n("Δ"),A]),_:1}),e(i,{value:"HOMO"},{default:l(()=>[n("ε"),Z]),_:1}),e(i,{value:"LUMO"},{default:l(()=>[n("ε"),W]),_:1}),e(i,{value:"mu"},{default:l(()=>[n("μ")]),_:1}),e(i,{value:"cv"},{default:l(()=>[n("C"),j]),_:1}),e(i,{value:"QED"},{default:l(()=>[n("QED")]),_:1}),e(i,{value:"LogP"},{default:l(()=>[n("Log P")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Batch size:"},{default:l(()=>[e(f,{modelValue:t.form2.batch_size,"onUpdate:modelValue":o[15]||(o[15]=s=>t.form2.batch_size=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Alpha value:"},{default:l(()=>[e(f,{modelValue:t.form2.alpha,"onUpdate:modelValue":o[16]||(o[16]=s=>t.form2.alpha=s),placeholder:"Please input",step:.01},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Beta value:"},{default:l(()=>[e(f,{modelValue:t.form2.beta,"onUpdate:modelValue":o[17]||(o[17]=s=>t.form2.beta=s),placeholder:"Please input",step:.001},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Max beta value:"},{default:l(()=>[e(f,{modelValue:t.form2.maxbeta,"onUpdate:modelValue":o[18]||(o[18]=s=>t.form2.maxbeta=s),placeholder:"Please input",step:.001},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Beta step value:"},{default:l(()=>[e(f,{modelValue:t.form2.stepBeta,"onUpdate:modelValue":o[19]||(o[19]=s=>t.form2.stepBeta=s),placeholder:"Please input",step:1e-4},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Latent dimension:"},{default:l(()=>[e(f,{modelValue:t.form2.latentDimension,"onUpdate:modelValue":o[20]||(o[20]=s=>t.form2.latentDimension=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Learning rate:"},{default:l(()=>[e(f,{modelValue:t.form2.learningRate,"onUpdate:modelValue":o[21]||(o[21]=s=>t.form2.learningRate=s),placeholder:"Please input",step:1e-4},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Number of epochs:"},{default:l(()=>[e(f,{modelValue:t.form2.n_epochs,"onUpdate:modelValue":o[22]||(o[22]=s=>t.form2.n_epochs=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Grad clip:"},{default:l(()=>[e(f,{modelValue:t.form2.gradClip,"onUpdate:modelValue":o[23]||(o[23]=s=>t.form2.gradClip=s),placeholder:"Please input",step:.1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(c,{modelValue:t.form2.shuffle,"onUpdate:modelValue":o[24]||(o[24]=s=>t.form2.shuffle=s),"inactive-text":"Shuffle close","active-text":"Shuffle"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(v,{label:"Equiformer Base",name:"tab3"},{default:l(()=>[e(g,{ref:"form3","label-width":"200px",style:{height:"400 px"}},{default:l(()=>[e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Condition for Prediction:"},{default:l(()=>[e(V,{modelValue:t.form3.genCon,"onUpdate:modelValue":o[25]||(o[25]=s=>t.form3.genCon=s),placeholder:"Please select"},{default:l(()=>[e(i,{value:"alpha"},{default:l(()=>[n("α")]),_:1}),e(i,{value:"delta"},{default:l(()=>[n("Δ"),J]),_:1}),e(i,{value:"HOMO"},{default:l(()=>[n("ε"),K]),_:1}),e(i,{value:"LUMO"},{default:l(()=>[n("ε"),X]),_:1}),e(i,{value:"mu"},{default:l(()=>[n("μ")]),_:1}),e(i,{value:"cv"},{default:l(()=>[n("C"),Y]),_:1}),e(i,{value:"G"},{default:l(()=>[n("G")]),_:1}),e(i,{value:"H"},{default:l(()=>[n("H")]),_:1}),e(i,{value:"ZPVE"},{default:l(()=>[n("ZPVE")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(c,{modelValue:t.form3.oneHot,"onUpdate:modelValue":o[26]||(o[26]=s=>t.form3.oneHot=s),"active-text":"Use one hot"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"File name for main function:"},{default:l(()=>[e(p,{modelValue:t.form3.fnameInput,"onUpdate:modelValue":o[27]||(o[27]=s=>t.form3.fnameInput=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Model name:"},{default:l(()=>[e(p,{modelValue:t.form3.mnameInput,"onUpdate:modelValue":o[28]||(o[28]=s=>t.form3.mnameInput=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Learning rate:"},{default:l(()=>[e(f,{modelValue:t.form3.learningRate,"onUpdate:modelValue":o[29]||(o[29]=s=>t.form3.learningRate=s),placeholder:"Please input",step:1e-4},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Radius of atom:"},{default:l(()=>[e(f,{modelValue:t.form3.radius,"onUpdate:modelValue":o[30]||(o[30]=s=>t.form3.radius=s),placeholder:"Please input",step:.01},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Number of basis:"},{default:l(()=>[e(f,{modelValue:t.form3.basis,"onUpdate:modelValue":o[31]||(o[31]=s=>t.form3.basis=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Weight decay:"},{default:l(()=>[e(f,{modelValue:t.form3.weightDecay,"onUpdate:modelValue":o[32]||(o[32]=s=>t.form3.weightDecay=s),placeholder:"Please input",step:1e-4},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,null,{default:l(()=>[e(a,{span:10},{default:l(()=>[e(u,{label:"Batch size:"},{default:l(()=>[e(f,{modelValue:t.form3.batch_size,"onUpdate:modelValue":o[33]||(o[33]=s=>t.form3.batch_size=s),placeholder:"Please input",step:1},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{span:10,offset:2},{default:l(()=>[e(u,{label:"Minimum learning rate:"},{default:l(()=>[e(f,{modelValue:t.form3.minlr,"onUpdate:modelValue":o[34]||(o[34]=s=>t.form3.minlr=s),placeholder:"Please input",step:1e-6},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue","tab-position"]),e(m,null,{default:l(()=>[e(a,{span:20},{default:l(()=>[e(p,{value:t.result,readonly:"",type:"textarea",rows:4},null,8,["value"])]),_:1}),e(a,{span:2,offset:1},{default:l(()=>[e(R,{onClick:y.copyToClipboard,icon:"el-icon-document-copy"},{default:l(()=>[n("Copy")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const oe=O(B,[["render",$]]);export{oe as default};
