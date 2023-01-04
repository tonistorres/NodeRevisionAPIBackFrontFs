GENERATE_EDITOR_CONFIG(){

echo "-----------------------"
echo "Gerando Editor config"
echo "-----------------------"
TIME

touch .editorconfig

cat << EOF > .editorconfig
# EditorConfig is awesome: https://EditorConfig.org
# https://desenvolvimentoparaweb.com/indicacoes/editorconfig-padronizacao-estilo-codigo/
# https://www.youtube.com/watch?v=bU3qLfszKZ4
# Não precisa procurar por mais arquivos editor config no meu projeto
# estou trabalhando apenas com esse arquivo root
root = true
# aplicar as regras a todos os arquivos
[*]
# define o conjunto de caractere que será utilizando em seu projeto
charset = utf-8
#Especifica o caractere que representa a
#quebra de linha no código, admitindo os valores lf, cr, ou crlf
end_of_line = lf
# define o tamanho da identação do codigo
indent_size = 2
indent_style = space
# inserir uma linha no final
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true
# remove espaços em brancos não utilizados no fim da linha
trim_trailing_whitespace = true
[*.md]
max_line_length = 0
trim_trailing_whitespace = false
[*.yml]
indent_style = space
indent_size = 2
EOF
}

GENERATE_EDITOR_CONFIG
