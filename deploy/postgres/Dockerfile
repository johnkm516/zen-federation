FROM dpage/pgadmin4:6.17

ARG PGADMIN_EMAIL

USER pgadmin
RUN mkdir -p  /var/lib/pgadmin/storage/$PGADMIN_EMAIL
COPY ./pgadmin/init.sh /pgadmin4/init.sh
COPY ./pgadmin/pgpass /pgadmin4/pgpass
COPY ./pgadmin/pgpass /var/lib/pgadmin/storage/$PGADMIN_EMAIL/pgpass
COPY ./pgadmin/servers.json /pgadmin4/servers.json

USER root
RUN chown pgadmin /var/lib/pgadmin/storage/$PGADMIN_EMAIL/pgpass
RUN chmod 0600 /var/lib/pgadmin/storage/$PGADMIN_EMAIL/pgpass
RUN PGADMIN_EMAIL_UNDERSCORE=$(echo "$PGADMIN_EMAIL" | sed 's/@/_/g') \
 && rm -r -f /var/lib/pgadmin/storage/$PGADMIN_EMAIL_UNDERSCORE \
 && mv /var/lib/pgadmin/storage/$PGADMIN_EMAIL/ /var/lib/pgadmin/storage/$PGADMIN_EMAIL_UNDERSCORE
 
USER pgadmin
ENTRYPOINT ["/pgadmin4/init.sh"]