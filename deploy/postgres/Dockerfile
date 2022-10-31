FROM dpage/pgadmin4:latest
ARG PGADMIN_EMAIL
USER pgadmin
RUN mkdir -p  /var/lib/pgadmin/storage/$PGADMIN_EMAIL
COPY ./pgadmin/pgpass /var/lib/pgadmin/storage/$PGADMIN_EMAIL
COPY ./pgadmin/servers.json /pgadmin4/servers.json
USER root
RUN chown pgadmin /var/lib/pgadmin/storage/$PGADMIN_EMAIL/pgpass
RUN chmod 0600 /var/lib/pgadmin/storage/$PGADMIN_EMAIL/pgpass
RUN PGADMIN_EMAIL_UNDERSCORE=$(echo "$PGADMIN_EMAIL" | sed 's/@/_/g') \
 && mv /var/lib/pgadmin/storage/$PGADMIN_EMAIL/ /var/lib/pgadmin/storage/$PGADMIN_EMAIL_UNDERSCORE
USER pgadmin
ENTRYPOINT ["/entrypoint.sh"]