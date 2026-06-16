document.getElementById('leadForm').addEventListener('submit',async(e)=>{
e.preventDefault();
const dados={
nome:nome.value,
email:email.value,
telefone:telefone.value,
mensagem:mensagem.value
};
try{
if(window.supabaseClient){
await supabaseClient.from('contatos').insert([dados]);
}
document.getElementById('status').innerText='Mensagem enviada com sucesso!';
}catch(err){
document.getElementById('status').innerText='Erro ao enviar.';
}
});