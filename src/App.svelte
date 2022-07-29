<script lang="ts">
  import { ContentEditorExtension, init } from "dc-extensions-sdk";

  const editor = document.querySelector("#json") as HTMLTextAreaElement;

  let initialized = initialize();

  async function initialize() {
    const sdk = await <ContentEditorExtension>init()

    const formModel = await sdk.form.getValue()
    const formValue = JSON.stringify(formModel, null, 2);
    editor.value = formValue;

    sdk.form.onModelChange((_, formModel) => 
      editor.value = JSON.stringify(formModel, null, 2)
    );
    
    editor.addEventListener("input", () =>
      sdk.form.setValue(JSON.parse(editor.value))
    );

    return true
  }

</script>

<main>
  <textarea id="json"></textarea>
</main>

<style>
  main {
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }

  textarea {
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    box-sizing: border-box;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
