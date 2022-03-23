from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
import json
import requests
import subprocess

class API(ViewSet):
    http_method_names = ['post']
    permission_classes = (AllowAny,)
    api_url = "http://translate.api.cloud.yandex.net/translate/v2/translate/"
    folder_id = "b1goiou8tkto0joul46k"
    def create(self, request, *args, **kwargs):
        #try:
        with open("key.json", "w") as file:
            subprocess.run(["yc", "iam", "create-token"], stdout=file)
        body = json.loads(request.body)
        text = body["text"]
        language = body["targetLanguage"]
        with open("key.json", "r") as file:
            token = file.read().replace('\n', '')
            headers = {
                'Content-Type': 'application/json',
                "Authorization": "Bearer {0}".format(token)
            }
            data = {
                "folderId": self.folder_id,
                "texts": [text],
                "targetLanguageCode": language
            }
            response = requests.post('https://translate.api.cloud.yandex.net/translate/v2/translate',
                json = data,
                headers = headers
            )
        return Response({
            "status": "ok",
            "text": response.json()["translations"][0]["text"]
        }, status=status.HTTP_200_OK)
        #except:
        #    return Response({"status":"error"}, status=status.HTTP_400_BAD_REQUEST)
