Production (build + nginx): 
```bash
docker compose up --build
```
→  http://localhost:8080



Dev (hot reload):
```bash
docker compose -f docker-compose.dev.yml up --build
```
→  http://localhost:5173


Copy container built node modles to local:
```bash
docker cp <container id>:/app/node_modeules .
```