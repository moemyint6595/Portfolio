using Microsoft.JSInterop;

namespace GlobalShared.Services
{
    public class JsInterop : IAsyncDisposable
    {
        //private readonly Lazy<Task<IJSObjectReference>> threeRenderModule;

        public JsInterop(IJSRuntime jsRuntime)
        {
            //threeRenderModule = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
            //  "import", "./Render.js").AsTask());

        }
        //public async ValueTask CreateBoxModal(string target)
        //{
        //    var module = await threeRenderModule.Value;
        //    await module.InvokeVoidAsync("CreateBoxModal", target);
        //}

        //public async ValueTask CreateCarModal(string target)
        //{
        //    var module = await threeRenderModule.Value;
        //    await module.InvokeVoidAsync("LoadCarModal", target);
        //}

        public async ValueTask DisposeAsync()
        {
            //if (threeRenderModule.IsValueCreated)
            //{
            //    var module = await threeRenderModule.Value;
            //    await module.DisposeAsync();
            //}
        }
    }
}
