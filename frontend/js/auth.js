//logica de login com supabase
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('SUA_URL', 'SUA_ANON_KEY');

async function login(email, senha) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) return alert(error.message);
    window.location.href = 'app.html'; // redireciona após login
}

async function cadastrar(email, senha) {
    const { error } = await supabase.auth.signUp({ email, password: senha });
    if (error) return alert(error.message);
    alert('Verifique seu email para confirmar o cadastro!');
}