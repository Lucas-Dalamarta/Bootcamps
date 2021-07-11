# Recuperação de Senha

**RF**

- O Usuário deve poder recuperar sua senha informando o seu e-mail.
- O Usuário deve receber um e=mail com instruções de recuperação de senha.
- O Usuário deve pode resetar sua senha.

**RNF**

- Utilizar **Mailtrap** para ambiente de dev.
- Utilizar **Amazon SES** para ambiente de prod.
- O envio de e-mails deve ser um background job.

**RN**

- O link enviado no email deve expirar em 2h.
- Ao resetar a senha, o usuário precisa confirmar a nova senha.

# Atualização do Perfil

**RF**

- O Usuário deve poder atualizar seu email, nome, e senha.

**RN**

- O Usuário não deve poder atualizar seu email para um email já utilizado.
- Para atualizar a senha, o usuário deve informar a senha antiga.
- Ao atualizar a senha, o usuário precisa confirmar a nova senha.

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados.
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador.
- O usuário deve poder listar horários disponíveis para um dia específico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador.

**RN**

- Cada agendamento deve durar 1h exatamente.
- Os agendamentos estarão disponíveis entre 8am e 6pm.
- O usuário só pode agendar para datas futuras.
- O usuário só pode agendar para horários disponíveis.
- O usuário não pode agendar um serviço consigo mesmo.

**RNF**

- A listagem de prestadores deve ser armazenada em cache.

# Painel do Prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico.
- O prestador deve receber uma notificação para sempre que houver um novo agendamento.
- O prestador deve receber uma notificação para sempre que novo agendamento for cancelado.
- O prestador deve poder visualizar notificações não lidas.

**RN**

- A notificação deve ter um status de lida ou não-lida.

**RNF**

- Os agendamentos do prestador no dia devem ser armazendos em cache.
- As notificações do prestador devem ser armazenadas no **MongoDB**.
- As notificações do prestador devem devem ser enviadas em real-time utilizando **Socket.io**.
