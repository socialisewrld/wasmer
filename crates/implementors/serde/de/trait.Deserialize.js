(function() {var implementors = {};
implementors["wasmer_c_api"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for OutputCapturer","synthetic":false,"types":[]}];
implementors["wasmer_compiler"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for InstructionAddressMap","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for FunctionAddressMap","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CompiledFunctionFrameInfo","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for FunctionBody","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CompiledFunction","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Dwarf","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Compilation","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for JumpTable","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CompileModuleInfo","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for RelocationKind","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Relocation","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for RelocationTarget","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for TrapInformation","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CompiledFunctionUnwindInfo","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SectionIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CustomSectionProtection","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CustomSection","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SectionBody","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SourceLoc","synthetic":false,"types":[]}];
implementors["wasmer_engine"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for UnprocessedFunctionFrameInfo","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SerializableFunctionFrameInfo","synthetic":false,"types":[]}];
implementors["wasmer_engine_dummy"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for DummyArtifactMetadata","synthetic":false,"types":[]}];
implementors["wasmer_engine_jit"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SerializableCompilation","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SerializableModule","synthetic":false,"types":[]}];
implementors["wasmer_engine_native"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ModuleMetadata","synthetic":false,"types":[]}];
implementors["wasmer_engine_object_file"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ModuleMetadata","synthetic":false,"types":[]}];
implementors["wasmer_types"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Features","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for LocalFunctionIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for LocalTableIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for LocalMemoryIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for LocalGlobalIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for FunctionIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for TableIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for GlobalIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for MemoryIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for SignatureIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for DataIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ElemIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for CustomSectionIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ExportIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ImportIndex","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for TableInitializer","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for DataInitializerLocation","synthetic":false,"types":[]},{"text":"impl&lt;'de: 'data, 'data&gt; Deserialize&lt;'de&gt; for DataInitializer&lt;'data&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for OwnedDataInitializer","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Type","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for V128","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ExternType","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for FunctionType","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Mutability","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for GlobalType","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for GlobalInit","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for TableType","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for MemoryType","synthetic":false,"types":[]},{"text":"impl&lt;'de, T&gt; Deserialize&lt;'de&gt; for ImportType&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de, T&gt; Deserialize&lt;'de&gt; for ExportType&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Pages","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl&lt;'de, T:&nbsp;ReservedValue&gt; Deserialize&lt;'de&gt; for PackedOption&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de, K, V&gt; Deserialize&lt;'de&gt; for PrimaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'de, K, V&gt; Deserialize&lt;'de&gt; for SecondaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["wasmer_vm"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for MemoryStyle","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for ModuleInfo","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for TableStyle","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for TrapCode","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for LibCall","synthetic":false,"types":[]}];
implementors["wasmer_wasi"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Box&lt;dyn WasiFile + Send&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Box&lt;dyn WasiFile&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for HostFile","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Stdout","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Stderr","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Stdin","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Pipe","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for InodeVal","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Kind","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for Fd","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for WasiFs","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for WasiState","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for __wasi_filestat_t","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for __wasi_filestat_t","synthetic":false,"types":[]}];
implementors["wasmer_wasi_experimental_io_devices"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for FrameBufferFileType","synthetic":false,"types":[]},{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for FrameBuffer","synthetic":false,"types":[]}];
implementors["wasmer_wast"] = [{"text":"impl&lt;'de&gt; Deserialize&lt;'de&gt; for OutputCapturerer","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()