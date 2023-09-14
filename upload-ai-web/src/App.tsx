import { Button } from "./components/ui/button";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Separator } from "./components/ui/separator";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">

          <span className="text-sm text-muted-foreground">Desenvolvido com 💜 no NLW da Rocketseat</span>

          <Separator orientation="vertical" className="h-6"></Separator>

          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>

        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea placeholder="Inclua o prompt para a IA..." readOnly className="resize-none p-5 leading-relaxed">

            </Textarea>
            <Textarea placeholder="Resultado gerado pela IA..." readOnly className="resize-none p-5 leading-relaxed">

            </Textarea>

          </div>
          <p className="text-s text-muted-foreground">
            Lembre-se: Você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteudo da transcrição do video selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5">
              <FileVideo className="w-4 h4" />
              Selecione seu vídeo
            </label>

            <input type="file" name="video" id="video" accept="video/mp4" className="sr-only" />

            <Separator></Separator>
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
              <Textarea id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionadas no video separadas por virgula (,)"></Textarea>
            </div>
            <Button type="submit" className="w-full">
              Carregar Vídeo
              <Upload className="w-4 h4 ml-2"></Upload>
            </Button>
          </form>

          <Separator></Separator>

          <form className="space-y-6">

            <div className="space-y-2">
              <Label>
                Prompt
              </Label>


              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>

                    <SelectItem value="title_yt">
                      Titulo do Youtube
                    </SelectItem>
                    <SelectItem value="desc_yt">
                      Descrição do Youtube
                    </SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>
                Modelo
              </Label>


              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>

                    <SelectItem value="gpt3.5">
                      GPT 3.5-turbo 16k
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">Você poderá customizar essa opção em breve</span>
            </div>

            <Separator></Separator>


            <div className="space-y-4">
              <Label>
                Temperatura
              </Label>

              <Slider min={0} max={1} step={0.1}>

              </Slider>

              <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativos e com possiveis erros</span>
            </div>

            <Separator></Separator>

            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h4 ml-2"></Wand2>
            </Button>
          </form>

        </aside>
      </main>
    </div>

  )
}

