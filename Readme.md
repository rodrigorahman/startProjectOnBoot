## Instalando o Nodejs

```
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_13.x | sudo -E bash -
sudo yum install -y nodejs
```

## SCP
```
scp -i ../amazom_key/rodrigorahman.pem  -r ./startProjectOnBoot ec2-user@18.233.170.194:/tmp/
```

## Criando um service no linux:

```
[Unit]
Description=Example systemd service.
[Service]

Type=simple
ExecStart=/bin/node /usr/bin/test_service.sh

[Install]
WantedBy=multi-user.target
```

## Comando para colocar no boot

```
sudo cp cep_nodejs.service /etc/systemd/system/cep_nodejs.service
sudo chmod 644 /etc/systemd/system/cep_nodejs.service
sudo systemctl start cep_nodejs
sudo systemctl status cep_nodejs
```

## Output da aplicação

```
journalctl -u cep_nodejs.service -b --no-pager -f
```