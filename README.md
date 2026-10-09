Nome: Diego Souza Melo RA: 2040482422016

Como executar

Passo 1: Clonar o repositório
Utilize o comando abaixo para clonar o repositório:
git clone https://github.com/Diegos303/20262_fatec_ipi_pdmt_P1.git

Passo 2: Instalar as dependências
Utilize o comando abaixo para baixar e instalar as dependências do projeto:
npm i

Passo 3:
Obter as chaves de API

Chave da API do PrimeReact
	Acesse o site https://primereact.dev/.
	Clique em Get Prime.
	Faça o login na sua conta e clique em Account no perfil.
    Acesse a opção Prime UI, onde estará disponível a chave de API do PrimeReact.

Chave da API do Geoapify
	acesse o site https://www.geoapify.com/
	Acesse o projeto no Geoapify.
    Copie o link de exemplo abaixo:
https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=teste
Localize o apiKey no final do link e copie o valor da chave de API que aparece após o sinal de igual (=).	
		
Passo 4: Inserir as chaves de API
Insira cada chave de API em seu respectivo local no arquivo:
src/utils/chaves.js

Passo 5: Executar o projeto
Utilize o comando abaixo para iniciar o projeto:

npm run dev

Em seguida, copie o link exibido no terminal e abra-o em um navegador. Ao acessar o site, será solicitada permissão para acessar sua localização.


